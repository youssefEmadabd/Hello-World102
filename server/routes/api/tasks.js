const express = require("express");
const router = express.Router();
const _ = require("underscore");
const passport = require("passport");

// Load Models
const Task = require("../../models/Task");
const Application = require("../../models/Application");
const Member = require("../../models/Member");
const Partner = require("../../models/Partner");
const Consultant = require("../../models/Consultant");
const Admin = require("../../models/Admin");
const Organization = require("../../models/Organization")
// Load Validation
const validator = require("../../validation/tasksValidation");

// @route   GET api/tasks/all/
// @desc    Gets all tasks
// @access  public
router.get("/all", async (req, res) => {
  try {
    const tasks = await Task.find({}).populate({
      path: "application",
      populate: {
        path: "partner",
        populate: {
          path: "organization"
        }
      }
    });
    return res.json({ data: tasks });
  } catch (error) {
    return res.status(404).json({ tasknotfound: "No Tasks found" });
  }
});

// @route   GET api/tasks/me/:id
// @desc    Gets my tasks
// @access  public
router.get("/me/:id", async (req, res) => {
  try {
    const tasks = await Task.find({
      applicants: { $elemMatch: { member: req.params.id, status: "accepted" } }
    }).populate({
      path: "application",
      populate: {
        path: "partner",
        populate: {
          path: "organization"
        }
      }
    });
    return res.json({ data: tasks });
  } catch (error) {
    res.status(404).json({ tasknotfound: "No Tasks found" });
    console.log(error);
  }
});

// @route   POST api/tasks/apply/:id/:taskID
// @desc    Eligible Member Apply For a Task
// @access  private
router.post(
  "/apply/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).send({ error: "Member not found" });

      const task = await Task.findById(req.params.taskID);
      if (!task) return res.status(404).send({ error: "Task not found" });

      for (let skill of task.skills) {
        if (!member.skills.includes(skill))
          return res
            .status(400)
            .json({ msg: "Member is not Eligible to Apply for this Task" });
      }

      const applicant = {
        member: req.params.id,
        status: "pending"
      };

      task.applicants.unshift(applicant);
      task.save();

      return res.json({
        msg: "Your Application was submitted successfully",
        data: task.applicants
      });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route   GET api/tasks/recommended/:id
// @desc    Gets Recommended tasks
// @access  private
router.get(
  "/recommended/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).send({ error: "Member not found" });

      let recommendedTasks = [];
      Task.find({})
        .stream()
        .on("data", function(task) {
          for (let skill of member.skills) {
            for (let skill2 of task.skills) {
              if (String(skill) == String(skill2))
                recommendedTasks.push(task._id);
            }
          }
        });

      return res.json({ data: output });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route   DELETE api/tasks/:id/:taskID
// @desc    Delete Member's Application For a Task
// @access  private
router.delete(
  "/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).send({ error: "Member not found" });

      const task = await Task.findById(req.params.taskID);
      if (!task) return res.status(404).send({ error: "Task not found" });

      task.applicants = _.reject(task.applicants, element => {
        return element.member == req.params.id;
      });
      task.save();
      res.json({
        msg: "Member application was deleted successfully",
        data: task.applicants
      });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route   POST api/tasks/partner/:id
// @desc    Partner Posts a Task
// @access  private
router.post(
  "/partner/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const organization = await Organization.findOne({user : req.user.id})
      const partner = await Partner.findOne({organization: organization._id});
      if (!partner) return res.status(404).send({ error: "Partner not found" });

      const application = await Application.findById(req.params.id);
      if (!application)
        return res.status(404).send({ error: "Application not found" });

      const isValidated = validator.postValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      if (application.needConsultancy) {
        return res.status(400).json({
          Unauthorized: "This application can only be posted by a consultant"
        });
      }

      if (!application.reviewed) {
        return res
          .status(400)
          .json({ error: "This Application has not been reviewed yet" });
      }

      if (application.partner != req.params.id) {
        return res.status(400).json({
          Unauthorized: "This Partner is not responsible for this Application"
        });
      }

      const fields = {};
      fields.application = req.params.appID;
      fields.levelOfCommitment = req.body.levelOfCommitment;
      fields.monetaryCompensation = req.body.monetaryCompensation;
      fields.experienceLevel = req.body.experienceLevel;
      fields.skills = req.body.skills.split(",");

      for (let applicant of application.applicants) {
        if (applicant.status == "accepted") {
          fields.consultant = applicant;
        }
      }

      const newTask = await Task.create(fields);
      return res.json({ msg: "Task was created successfully", data: newTask });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

// @route   POST api/tasks/partner/respond/:id/:id2/:taskID
// @desc    Partner Responds to Member Applications
// @access  Private
router.post(
  "/partner/respond/:id/:id2/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).send({ error: "Member not found" });

      const partner = await Partner.findById(req.params.id2);
      if (!partner) return res.status(404).send({ error: "Partner not found" });

      const task = await Task.findById(req.params.taskID).populate(
        "application"
      );
      if (!task) return res.status(404).send({ error: "Task not found" });
      if (task.application.needConsultancy) {
        return res.status(400).json({
          Unauthorized: "This Task Can Only be posted by a Consultant"
        });
      }

      if (task.application.partner != req.params.id2) {
        return res.status(400).json({
          Unauthorized: "This Partner is not responsible for this task"
        });
      }

      const isValidated = validator.respondValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const applicant = task.applicants.find(element => {
        return element.member == req.params.id;
      });

      if (!applicant)
        return res
          .status(404)
          .json({ error: "This Member did not apply for This Task" });

      applicant.status = req.body.response;

      task.save();

      if (applicant.status == "accepted") {
        const notification = {
          sender: req.params.partner,
          text: `Your Request to apply for task ${
            req.params.taskID
          } has been accepted`
        };
        member.notifications.unshift();
        member.save();
      }

      return res.json({ msg: "Response Saved", data: task });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route   GET api/tasks/admin/:id
// @desc    Admin Gets Unreviewed Tasks
// @access  Private
router.get(
  "/admin/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) return res.status(404).send({ error: "Admin not found" });

      const task = await Task.find({ reviewed: false }).populate({
        path: "application",
        populate: {
          path: "partner",
          populate: {
            path: "organization"
          }
        }
      });
      if (!task) return res.status(404).send({ error: "Task not found" });

      return res.json({ data: task });
    } catch (error) {
      return res.status(404).json({ adminnotfound: "Admin not found" });
    }
  }
);

// @route   GET api/tasks/admin/:id/:taskID
// @desc    Admin Gets Task
// @access  Private
router.get(
  "/admin/task/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const admin = await Admin.find({ user: req.user.id });
      if (!admin) return res.status(404).send({ error: "Admin not found" });

      const task = await Task.findById(req.params.taskID).populate(
        "application"
      );
      if (!task) return res.status(404).send({ error: "Task not found" });

      return res.json({ data: task });
    } catch (error) {
      return res.status(404).json({ adminnotfound: "Admin not found" });
    }
  }
);

// @route   GET api/tasks/consultant/:id/:taskID
// @desc    Member Gets Task
// @access  Private
router.get(
  "/member/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const task = await Task.findById(req.params.taskID)
        .populate("application")
        .populate("partner");
      if (!task) return res.status(404).send({ error: "Task not found" });

      if (!task.reviewed)
        return res.status(404).send({ error: "Task not reviewed" });

      return res.json({ data: task });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route   POST api/tasks/admin/review/:id/:taskID
// @desc    Admin Reviews Task
// @access  Private
router.post(
  "/admin/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) return res.status(404).send({ error: "Admin not found" });

      const task = await Task.findById(req.params.taskID);
      if (!task) return res.status(404).send({ error: "Task not found" });

      task.reviewed = true;

      task.save();

      return res.json({ msg: "Task Reviewed Successfully", data: task });
    } catch (error) {
      return res.status(404).json({ adminnotfound: "Admin not found" });
    }
  }
);

// @route   PUT api/tasks/extra/:id/:taskID
// @desc    Admin Adds Extra Attribute To Task
// @access  Private
router.put(
  "/extra/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) return res.status(404).send({ error: "Admin not found" });

      const task = await Task.findById(req.params.taskID);
      if (!task) return res.status(404).send({ error: "Task not found" });

      const isValidated = validator.extraValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const extra = req.body.extra;
      task.extra.unshift(extra);

      task.save();

      return res.json({
        msg: "Attribute successfully added to the task",
        data: task
      });
    } catch (error) {
      return res.status(404).json({ adminnotfound: "Admin not found" });
    }
  }
);

// @route   PUT api/tasks/admin/edit/:id/:taskID
// @desc    Admin Edits Task
// @access  Private
router.put(
  "/edit/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) return res.status(404).send({ error: "Admin not found" });

      const task = await Task.findById(req.params.taskID);
      if (!task) return res.status(404).send({ error: "Task not found" });

      const isValidated = validator.updateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const fields = {};
      fields.levelOfCommitment = req.body.levelOfCommitment;
      fields.monetaryCompensation = req.body.monetaryCompensation;
      fields.experienceLevel = req.body.experienceLevel;
      fields.skills = req.body.skills.split(",");

      const updatedTask = await Task.findByIdAndUpdate(req.params.taskID, {
        $set: fields
      });
      return res.json({ msg: "Task was updated successfully" });
    } catch (error) {
      return res.status(404).json({ adminnotfound: "Admin not found" });
    }
  }
);

// @route   DELETE api/tasks/admin/:id/:taskID
// @desc    Admin Deletes Task
// @access  Private
router.delete(
  "/admin/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) return res.status(404).send({ error: "Admin not found" });

      const task = await Task.findById(req.params.taskID);
      if (!task) return res.status(404).send({ error: "Task not found" });

      const deletedTask = await Task.findByIdAndRemove(req.params.taskID);

      res.json({ msg: "Task Successfully deleted", data: deletedTask });
    } catch (error) {
      return res.status(404).json({ adminnotfound: "Admin not found" });
    }
  }
);

// @route   POST api/tasks/consultant/post/:id/:appID
// @desc    Consultant Posts a Task
// @access  private
router.post(
  "/consultant/:id/:appID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const consultant = await Consultant.findById(req.params.id);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });

      const application = await Application.findById(req.params.appID);
      if (!application)
        return res.status(404).send({ error: "Application not found" });

      const isValidated = validator.postValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      if (!application.needConsultancy) {
        return res.status(400).json({
          Unauthorized: "This Task can only be submitted by the Partner"
        });
      }

      if (!application.reviewed) {
        return res
          .status(400)
          .json({ error: "This Application has not been reviewed yet" });
      }

      const fields = {};
      fields.application = req.params.appID;
      fields.levelOfCommitment = req.body.levelOfCommitment;
      fields.monetaryCompensation = req.body.monetaryCompensation;
      fields.experienceLevel = req.body.experienceLevel;
      fields.skills = req.body.skills.split(",");

      for (let applicant of application.applicants) {
        if (applicant.status == "accepted") {
          fields.consultant = applicant;
        }
      }

      const newTask = await Task.create(fields);
      return res.json({ msg: "Task was created successfully", data: newTask });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

// @route   POST api/tasks/consultant/respond/:id/:id2/:id3
// @desc    Consultant Responds to Member Applications
// @access  Private
router.post(
  "/consultant/respond/:id/:id2/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).send({ error: "Member not found" });

      const consultant = await Consultant.findById(req.params.id2);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });

      const task = await Task.findById(req.params.taskID).populate(
        "application"
      );
      if (!task) return res.status(404).send({ error: "Task not found" });

      if (!task.application.needConsultancy) {
        return res
          .status(400)
          .json({ Unauthorized: "This Task can Only be posted by Partner" });
      }

      if (task.consultant != req.params.id2) {
        return res.status(400).json({
          Unauthorized: "This Consultant is not responsible for this task"
        });
      }

      const isValidated = validator.respondValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const applicant = task.applicants.find(element => {
        return element.member == req.params.id;
      });

      if (!applicant)
        return res
          .status(404)
          .json({ error: "This Member did not apply for This Task" });

      applicant.status = req.body.response;

      task.save();

      return res.json({ msg: "Response Saved", data: task });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

module.exports = router;

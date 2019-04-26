const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const passport = require("passport");

//Load Models
const Member = require("../../../models/Member");
const User = require("../../../models/User");
const Task = require("../../../models/Task");
const Masterclass = require("../../../models/Masterclass");

//Load Validation
const validator = require("../../../validation/memberValidation");

// @route GET api/profiles/member/all
// @desc Get All Members
// @access public
router.get("/all", async (req, res) => {
  try {
    const members = await Member.find({});
    if (!members) return res.status(404).send({ empty: "No members found" });
    return res.json({ data: members });
  } catch (error) {
    return res.status(404).json({ membernotfound: "Member not found" });
  }
});

// @route GET api/profiles/member/:id
// @desc Get Member's Profile by ID
// @access private
router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id)
      .populate("tasksCompleted.task", [
        "date",
        "experienceLevel",
        "monetaryCompensation"
      ])
      .populate("masterclasses.masterclass", ["name", "description"])
      .populate("partner", ["name"]);
    if (!member) return res.status(404).send({ error: "Member not found" });
    return res.json({ data: member });
  } catch (error) {
    res.status(404).json({ membernotfound: "Member not found" });
    console.log(error);
  }
});

// @route GET api/profiles/member
// @desc Get Current Member's Profile
// @access private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findOne({ user: req.user.id })
        .populate("tasksCompleted.task", [
          "date",
          "experienceLevel",
          "monetaryCompensation"
        ])
        .populate("masterclasses.masterclass", ["name", "description"])
        .populate("partner", ["name"]);
      if (!member) return res.status(404).send({ error: "Member not found" });
      return res.json({ data: member });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route post api/profiles/member
// @desc Creates Member Profile
// @access private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) return res.status(404).send({ error: "User does not exist" });
      const isValidated = validator.createValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const memberFields = {};
      memberFields.name = req.body.name;
      memberFields.phone = req.body.phone;
      memberFields.email = req.body.email;
      memberFields.age = req.body.age;
      memberFields.user = req.user.id;
      memberFields.skills = req.body.skills.split(",");
      memberFields.interests = req.body.interests.split(",");

      memberFields.social = {};
      if (req.body.youtube) memberFields.social.youtube = req.body.youtube;
      if (req.body.facebook) memberFields.social.facebook = req.body.facebook;
      if (req.body.twitter) memberFields.social.twitter = req.body.twitter;
      if (req.body.linkedin) memberFields.social.linkedin = req.body.linkedin;
      if (req.body.instagram)
        memberFields.social.instagram = req.body.instagram;

      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      memberFields.avatar = avatar;

      const newMember = await Member.create(memberFields);
      return res.json({
        msg: "Member was created successfully",
        data: newMember
      });
    } catch (err) {
      res.status(404).json({ usernotfound: "User not found" });
      console.log(err);
    }
  }
);

// @route PUT api/profiles/member/:id
// @desc Edit Member's Profile
// @access private
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findOne({ user: req.user.id });
      if (!member)
        return res.status(404).send({ error: "Member does not exist" });
      const isValidated = validator.updateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const memberFields = {};
      if (req.body.name) memberFields.name = req.body.name;
      if (req.body.phone) memberFields.phone = req.body.phone;
      if (req.body.email) memberFields.email = req.body.email;
      if (req.body.age) memberFields.age = req.body.age;
      if (req.body.skills) member.skills.unshift(req.body.skills.split(","));
      if (req.body.interests)
        member.interests.unshift(req.body.interests.split(","));

      member.save();

      memberFields.user = req.user.id;

      memberFields.social = {};
      if (req.body.youtube) memberFields.social.youtube = req.body.youtube;
      if (req.body.facebook) memberFields.social.facebook = req.body.facebook;
      if (req.body.twitter) memberFields.social.twitter = req.body.twitter;
      if (req.body.linkedin) memberFields.social.linkedin = req.body.linkedin;
      if (req.body.instagram)
        memberFields.social.instagram = req.body.instagram;

      if (req.body.avatar) memberFields.avatar = req.body.avatar;

      const updatedMember = await Member.findOneAndUpdate(
        { user: req.user.id },
        {
          $set: memberFields
        }
      );
      return res.json({ msg: "Member updated successfully" });
    } catch (err) {
      return res.status(404).json({ usernotfound: "User not found" });
    }
  }
);

// @route POST api/profiles/member/skills/:id
// @desc Adds A Skill To Member's Profile
// @access private
router.post(
  "/skills/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const skill = req.body.skill;
      const id = req.params.id;
      const member = await Member.findById(id);
      if (!member) {
        return res
          .status(400)
          .json({ profile: "There is no Member profile for this user" });
      }
      const isValidated = validator.skillValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      member.skills.unshift(skill);
      member.save();

      return res.json({ msg: "Skill added successfully", data: member.skills });
    } catch (err) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route POST api/profiles/member/interests/:id
// @desc Adds Interest To Member's Profile
// @access private
router.post(
  "/interests/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const interest = req.body.interest;
      const id = req.params.id;
      const member = await Member.findById(id);

      if (!member) {
        return res
          .status(404)
          .json({ profile: "There is no Member profile for this user" });
      }
      const isValidated = validator.interestsValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      member.interests.unshift(interest);
      member.save();
      return res.json({
        msg: "Interest added successfully",
        data: member.interests
      });
    } catch (err) {
      return res.status(404).json({ Membernotfound: "member not found" });
    }
  }
);

// @route POST api/profiles/member/past-events/:id
// @desc Adds Past Event To Member's Profile
// @access private
router.post(
  "/past-events/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { title, description, location } = req.body;
      const id = req.params.id;

      const member1 = await Member.findById(id);

      if (!member1) {
        return res
          .status(400)
          .json({ profile: "There is no Member profile for this user" });
      }
      const isValidated = validator.eventValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const pastEvent = {
        title,
        description,
        location
      };
      member1.pastEvents.unshift(pastEvent);
      member1.save();
      return res.json({
        msg: "Event added successfully",
        data: member1.pastEvents
      });
    } catch (err) {
      return res.status(404).json({ Membernotfound: "member not found" });
    }
  }
);

// @route POST api/profiles/member/tasks-completed/:id/:id2
// @desc Adds Completed Task To Member's Profile
// @access private
router.post(
  "/completed-tasks/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).send({ error: "Member not found" });

      const task = await Task.findById(req.params.taskID).populate(
        "application"
      );
      if (!task) return res.status(404).send({ error: "Task not found" });

      const applicant = task.applicants.find(element => {
        return element.member == req.params.id;
      });

      if (!applicant)
        return res
          .status(404)
          .send({ error: "Member did not apply for this application" });

      const completedTask = {
        task: req.params.taskID
      };

      member.tasksCompleted.unshift(completedTask);
      member.save();

      return res.json({
        msg: "Completed Task successfully added",
        data: member.tasksCompleted
      });
    } catch (error) {
      return res.status(404).json({ Membernotfound: "member not found" });
    }
  }
);

// @route POST api/profiles/member/certificates/:id
// @desc Adds Certificates To Member's Profile
// @access private
router.post(
  "/certificates/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { title, entity, description } = req.body;
      const id = req.params.id;
      const member = await Member.findById(id);

      if (!member) {
        return res
          .status(400)
          .json({ profile: "There is no Member profile for this user" });
      }
      const isValidated = validator.certificateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const certificate = {
        title,
        entity,
        description
      };
      member.certificates.push(certificate);
      member.save();
      return res.json({
        msg: "Certificate added successfully",
        data: member.certificates
      });
    } catch (err) {
      return res.status(404).json({ Membernotfound: "member not found" });
    }
  }
);

// @route POST api/profiles/member/masterclasses/add/:id/:id2
// @desc Adds Masterclass To Member's Profile
// @access private
router.post(
  "/masterclasses/add/:id/:id2",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const memberID = req.params.id;
      const masterclassID = req.params.id2;
      const member = await Member.findById(memberID);

      if (!member) {
        return res
          .status(400)
          .json({ profile: "There is no Member profile for this user" });
      }
      const masterclass = Masterclass.findById(masterclassID);

      if (!masterclass) {
        return res
          .status(400)
          .json({ profile: "There is no such Masterclass" });
      }
      for (let applicant of masterclass.applicants) {
        if (applicant.member == member) {
          member.masterclasses.push(masterclass);
          member.save();
          return res.json(member);
        }
      }
    } catch (err) {
      return res.status(404).json({ Membernotfound: "member not found" });
    }
  }
);

// @route DELETE api/profiles/member/:id
// @desc Delete Member's Profile
// @access private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).send({ error: "Member not found" });

      const deletedMember = await Member.findByIdAndRemove(req.params.id);
      const deletedUser = await User.findByIdAndRemove(req.user.id);

      return res.json({ msg: "deleted", data: deletedMember });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route DELETE api/profiles/member/skills/:id
// @desc Delete A Skill To Member's Profile
// @access private
router.delete(
  "/skills/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const skill = req.body.skill;
      const id = req.params.id;
      const member = await Member.findById(id);
      if (!member) {
        return res
          .status(400)
          .json({ profile: "There is no Member profile for this user" });
      }
      const isValidated = validator.skillValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      member.skills.splice(member.skills.indexOf(skill), 1);
      member.save();
      return res.json({ msg: "deleted", data: member.skills });
    } catch (err) {
      console.log(err);
    }
  }
);

// @route DELETE api/profiles/member/interests/:id
// @desc Delete Interest To Member's Profile
// @access private
router.delete(
  "/interests/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const interest = req.body.interest;
      const id = req.params.id;

      const member = await Member.findById(id);
      if (!member) {
        return res
          .status(400)
          .json({ profile: "There is no Member profile for this user" });
      }
      const isValidated = validator.interestsValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      member.interests.splice(member.interests.indexOf(interest), 1);
      member.save();
      return res.json({ msg: "deleted", data: member.interests });
    } catch (err) {
      console.log(err);
    }
  }
);

// @route DELETE api/profiles/member/past-events/:id
// @desc Delete Past Event To Member's Profile
// @access private
router.delete(
  "/past-events/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { title, description, location } = req.body;
      const id = req.params.id;

      const member = await Member.findById(id);

      if (!member) {
        return res
          .status(400)
          .json({ profile: "There is no Member profile for this user" });
      }
      const isValidated = validator.eventValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const pastEvent = {
        title,
        description,
        location
      };
      member.pastEvents.splice(member.pastEvents.indexOf(pastEvent), 1);
      member.save();
      return res.json({ msg: "deleted", data: member.pastEvents });
    } catch (err) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route DELETE api/profiles/member/tasks-completed/:id/:id2
// @desc Delete Completed Task To Member's Profile
// @access private
router.delete(
  "/completed-tasks/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).send({ error: "Member not found" });

      const task = await Task.findById(req.params.taskID).populate(
        "application"
      );
      if (!task) return res.status(404).send({ error: "Task not found" });

      const applicant = task.applicants.find(element => {
        return element.member == req.params.id;
      });

      if (!applicant)
        return res
          .status(404)
          .send({ error: "Member did not apply for this application" });

      const completedTask = {
        task: req.params.taskID
      };

      member.tasksCompleted.splice(
        member.tasksCompleted.indexOf(completedTask),
        1
      );
      member.save();

      return res.json({ msg: "deleted", data: member.tasksCompleted });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

// @route DELETE api/profiles/member/certificates/:id
// @desc Delete Certificates To Member's Profile
// @access private
router.delete(
  "/certificates/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { title, entity, description } = req.body;
      const id = req.params.id;
      const member = await Member.findById(id);

      if (!member) {
        return res
          .status(400)
          .json({ profile: "There is no Member profile for this user" });
      }
      const isValidated = validator.certificateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const certificate = {
        title,
        entity,
        description
      };
      member.certificates.splice(member.certificates.indexOf(certificate), 1);
      member.save();
      return res.json({ msg: "deleted", data: member.certificates });
    } catch (err) {
      console.log(err);
    }
  }
);
module.exports = router;

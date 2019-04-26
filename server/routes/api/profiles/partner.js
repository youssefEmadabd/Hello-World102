const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Models
const Partner = require("../../../models/Partner");
const Organization = require("../../../models/Organization");
const User = require("../../../models/User");
const Task = require("../../../models/Task");

// Load Validation
const validator2 = require("../../../validation/organizationValidation");
const validator = require("../../../validation/partnerValidation");

// @route   POST api/profiles/partner/:id
// @desc    Creates Partner Profile
// @access  Private
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const organization = await Organization.findById(req.params.id);
      if (!organization)
        return res.status(404).send({ error: "Organization not found" });
      const isValidated = validator.createValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const fields = {};
      fields.fieldOfWork = req.body.fieldOfWork;
      fields.organization = req.params.id;

      const newPartner = await Partner.create(fields);
      return res.json({
        msg: "Partner was created successfully",
        data: newPartner
      });
    } catch (error) {
      return res
        .status(404)
        .json({ organizationnotfound: "Organization not found" });
    }
  }
);

// @route   GET api/profiles/partner/:id
// @desc    Get Partner's profile by ID
// @access  private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id).populate(
        "organization"
      );
      if (!partner) return res.status(404).send({ error: "Partner not found" });
      return res.json({ data: partner });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

// @route GET api/profiles/partner
// @desc Get Current Partner's Profile
// @access private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const organization = await Organization.findOne({ user: req.user.id });
      if (!Organization)
        return res.status(404).send({ error: "Organization not found" });
      const partner = await Partner.findOne({ organization: organization._id });
      if (!partner) return res.status(404).send({ error: "Partner not found" });
      return res.json({ data: partner });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

// @route   PUT api/profiles/partner
// @desc    Edit Partner's Profile
// @access  Private
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const organization = await Organization.findOne({ user: req.user.id });
      const partner = await Partner.findOne({
        organization: organization._id
      });
      if (!partner)
        return res.status(404).send({ error: "Partner does not exist" });
      // const isValidated = validator.updateValidation(req.body);
      // if (isValidated.error)
      //   return res
      //     .status(400)
      //     .send({ error: isValidated.error.details[0].message });
      const orgFields = {};
      if (req.body.name) orgFields.name = req.body.name;
      if (req.body.phone) orgFields.phone = req.body.phone;
      if (req.body.email) orgFields.email = req.body.email;
      if (req.body.address) orgFields.address = req.body.address;
      const fields = {};
      if (req.body.fieldOfWork) fields.fieldOfWork = req.body.fieldOfWork;
      orgFields.social = {};
      if (req.body.youtube) orgFields.social.youtube = req.body.youtube;
      if (req.body.facebook) orgFields.social.facebook = req.body.facebook;
      if (req.body.twitter) orgFields.social.twitter = req.body.twitter;
      if (req.body.linkedin) orgFields.social.linkedin = req.body.linkedin;
      if (req.body.instagram) orgFields.social.instagram = req.body.instagram;

      if (req.body.avatar) orgFields.avatar = req.body.avatar;
      const updatedpartner = await Partner.findOneAndUpdate(
        { organization: organization._id },
        {
          $set: fields
        }
      );
      const updatedorganization = await Organization.findOneAndUpdate(
        { user: req.user.id },
        {
          $set: orgFields
        }
      );
      return res.json({ msg: "partner updated successfully" });
    } catch (err) {
      return res.status(404).json({ usernotfound: "User not found" });
    }
  }
);

// @route POST api/profiles/partner/board-members/add/:id
// @decs Adds Board Member To Partner's Profile
// @access private
router.post(
  "/board-members/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      if (!partner) return res.status(404).send({ error: "Partner not found" });
      const isValidated = validator.boardValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const boardMember = {
        name: req.body.name,
        position: req.body.position
      };
      partner.boardMembers.unshift(boardMember);

      partner.save();

      return res.json({
        msg: "Board Member successfully added",
        data: partner.boardMembers
      });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

// @route POST api/profiles/partner/events/add/:id
// @decs Adds Event To Partner's Profile
// @access private
router.post(
  "/events/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      if (!partner) return res.status(404).send({ error: "Partner not found" });
      const isValidated = validator.eventValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const newevent = {
        title: req.body.title,
        description: req.body.description
      };
      partner.events.unshift(newevent);

      partner.save();

      return res.json({
        msg: "Event successfully added",
        data: partner.events
      });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

// @route POST api/profiles/partner/partners/:id/:id2
// @decs Adds Partner to Partner's Profile
// @access private
router.post(
  "/partners/:id/:id2",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      if (!partner) return res.status(404).send({ error: "Partner not found" });

      const partner2 = await Partner.findById(req.params.id2);
      if (!partner2)
        return res.status(404).send({ error: "Partner not found" });

      partner.partners.unshift(req.params.id2);
      partner.save();

      return res.json({
        msg: "Partner successfully added",
        data: partner.partners
      });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

// @route POST api/profiles/partner/past-projects/:id/:taskID
// @decs Adds Past Project To Partner's Profile
// @access private
router.post(
  "/past-projects/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      if (!partner) return res.status(404).send({ error: "Partner not found" });

      const task = await Task.findById(req.params.taskID).populate(
        "application"
      );
      if (!task) return res.status(404).send({ error: "Task not found" });

      if (task.application.partner != req.params.id) {
        return res
          .status(400)
          .send({ Unauthorized: "This Task does not belong to this Partner" });
      }

      partner.pastProjects.unshift(req.params.taskID);
      partner.save();

      return res.json({
        msg: "Past Project successfully added",
        data: partner.pastProjects
      });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

// @route DELETE api/profiles/partner/board-members/:id
// @decs Delete Board Member from Partner's Profile
// @access private
router.delete(
  "/board-members/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      if (!partner) return res.status(404).send({ error: "Partner not found" });
      const isValidated = validator.boardValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const boardMember = {
        name: req.body.name,
        position: req.body.position
      };
      partner.boardMembers.splice(partner.boardMembers.indexOf(boardMember), 1);

      partner.save();

      return res.json({ msg: "deleted", data: partner.boardMembers });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

// @route DELETE api/profiles/partner/events/:id
// @decs Delete Event from Partner's Profile
// @access private
router.delete(
  "/events/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      if (!partner) return res.status(404).send({ error: "Partner not found" });
      const isValidated = validator.eventValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const newevent = {
        title: req.body.title,
        description: req.body.description
      };
      partner.events.splice(partner.events.indexOf(newevent), 1);

      partner.save();

      return res.json({ msg: "deleted", data: partner.events });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "parnter not found" });
    }
  }
);

// @route DELETE api/profiles/partner/partners/:id/:id2
// @decs Delete Partner from Partner's Profile
// @access private
router.delete(
  "/partners/:id/:id2",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      if (!partner) return res.status(404).send({ error: "Partner not found" });

      const partner2 = await Partner.findById(req.params.id2);
      if (!partner2)
        return res.status(404).send({ error: "Partner not found" });

      partner.partners.splice(partner.partners.indexOf(partner2), 1);

      partner.save();

      return res.json({ msg: "deleted", data: partner.partners });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "partner not found" });
    }
  }
);

// @route DELETE api/profiles/partner/past-projects/:id/:id2
// @desc Delete Completed Task To Partner's Profile
// @access private
router.delete(
  "/past-projects/:id/:taskID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      if (!partner) return res.status(404).send({ error: "Partner not found" });

      const task = await Task.findById(req.params.taskID).populate(
        "application"
      );
      if (!task) return res.status(404).send({ error: "Task not found" });

      if (task.application.partner != req.params.id) {
        return res
          .status(400)
          .send({ Unauthorized: "This Task does not belong to this Partner" });
      }

      partner.pastProjects.splice(
        partner.pastProjects.indexOf(req.params.taskID),
        1
      );
      partner.save();

      return res.json({ msg: "deleted", data: partner.pastProjects });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

// @route   DELETE api/profiles/partner/delete
// @desc    Delete Partner's Profile
// @access  Private
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const organization = await Organization.findOne({user: req.user.id})
      const partner = await Partner.findOne({organization:organization._id});
      if (!partner) return res.status(404).send({ error: "Partner not found" });

      const deletedPartner = await Partner.findByIdAndRemove(partner._id);  
      const deletedorganization = await Organization.findByIdAndRemove(organization._id)
      const deletedUser = await User.findByIdAndRemove(req.user.id);

      res.json({ msg: "deleted", data: {deletedPartner,deletedorganization,deletedUser} });
    } catch (error) {
      return res.status(404).json({ partnernotfound: "Partner not found" });
    }
  }
);

module.exports = router;

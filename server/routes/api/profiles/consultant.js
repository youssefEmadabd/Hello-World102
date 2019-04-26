const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Consultant Model
const Member = require("../../../models/Member");
const User = require("../../../models/User");
const Organization = require("../../../models/Organization");
const Consultant = require("../../../models/Consultant");
const Partner = require("../../../models/Partner");
//validator

const validator = require("../../../validation/consultantValidation");

// @route   POST api/profiles/consultant/:id
// @desc    Creates Consultant Profile
// @access  Private
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const organization = await Organization.findById(id);
      if (!organization)
        return res
          .status(404)
          .json({ profile: "There is no Organization profile for this user" });
      const consfield = {
        organization: req.params.id
      };
      const consultant = await Consultant.create(consfield);
      res.json({ msg: "Consultant Successfully created", data: consultant });
    } catch (err) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

// @route   GET api/profiles/consultant/:id
// @desc    Get consultant's profile by ID
// @access  private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const consultant = await Consultant.findById(id).populate("organization");

      if (!consultant) {
        return res
          .status(404)
          .json({ profile: "There is no Consultant profile for this user" });
      }

      return res.json({ data: consultant });
    } catch (err) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

// @route POST api/profiles/consultant/board-members/add/:id/:id2
// @decs Adds Board Member To Consultant's Profile
// @access private
router.post(
  "/board-members/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const consultant = await Consultant.findById(req.params.id);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });
      const isValidated = validator.boardValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const boardMember = {
        name: req.body.name,
        position: req.body.position
      };
      consultant.boardMembers.unshift(boardMember);

      consultant.save();

      return res.json({
        msg: "Board Member successfully added",
        data: consultant.boardMembers
      });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

// @route POST api/profiles/consultant/events/:id
// @decs Adds Event To Consultant's Profile
// @access private
router.post(
  "/events/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const consultant = await Consultant.findById(req.params.id);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });
      const isValidated = validator.eventValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const newevent = {
        title: req.body.title,
        description: req.body.description
      };
      consultant.events.unshift(newevent);

      consultant.save();

      return res.json({
        msg: "Event successfully added",
        data: consultant.events
      });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "consultant not found" });
    }
  }
);

// @route POST api/profiles/consultant/partners/:id/:id2
// @decs Adds Partner to Consultant's Profile
// @access private
router.post(
  "/partners/:id/:id2",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const consultant = await Consultant.findById(req.params.id);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });

      const partner = await Partner.findById(req.params.id2);
      if (!partner) return res.status(404).send({ error: "Partner not found" });

      consultant.partners.unshift(req.params.id2);
      consultant.save();

      return res.json({
        msg: "Partner successfully added",
        data: consultant.partners
      });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

// @route POST api/profiles/consultant/reports/:id
// @decs Adds A Report To Consultant's Profiles
// @access private
router.post(
  "/reports/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const consultant = await Consultant.findById(req.params.id);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });

      const isValidated = validator.reportValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      consultant.reports.unshift(req.body.report);
      consultant.save();

      return res.json({
        msg: "Report successfully added",
        data: consultant.reports
      });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

// @route DELETE api/profiles/consultant/board-members/:id/:id2
// @decs Delete Board Member from Consultant's Profile
// @access private
router.delete(
  "/board-members/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const consultant = await Consultant.findById(req.params.id);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });
      const isValidated = validator.boardValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const boardMember = {
        name: req.body.name,
        position: req.body.position
      };
      consultant.boardMembers.splice(
        consultant.boardMembers.indexOf(boardMember),
        1
      );

      consultant.save();

      return res.json({ msg: "deleted", data: consultant.boardMembers });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

// @route DELETE api/profiles/consultant/events/:id
// @decs Delete Event from Consultant's Profile
// @access private
router.delete(
  "/events/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const consultant = await Consultant.findById(req.params.id);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });
      const isValidated = validator.eventValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      const newevent = {
        title: req.body.title,
        description: req.body.description
      };
      consultant.events.splice(consultant.events.indexOf(newevent), 1);

      consultant.save();

      return res.json({ msg: "deleted", data: consultant.events });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "consultant not found" });
    }
  }
);

// @route DELETE api/profiles/consultant/partners/:id/:id2
// @decs Delete Partner from Consultant's Profile
// @access private
router.delete(
  "/partners/:id/:id2",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const consultant = await Consultant.findById(req.params.id);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });

      const partner = await Partner.findById(req.params.id2);
      if (!partner) return res.status(404).send({ error: "Partner not found" });

      consultant.partners.splice(consultant.partners.indexOf(partner), 1);

      consultant.save();

      return res.json({ msg: "deleted", data: consultant.partners });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

// @route DELETE api/profiles/consultant/reports/:id
// @decs Delete A Report To Consultant's Profiles
// @access private
router.delete(
  "/reports/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const consultant = await Consultant.findById(req.params.id);
      if (!consultant)
        return res.status(404).send({ error: "Consultant not found" });

      const isValidated = validator.reportValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });

      consultant.reports.splice(consultant.reports.indexOf(req.body.report), 1);

      consultant.save();

      return res.json({ msg: "deleted", data: consultant.reports });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

// @route   DELETE api/profiles/consultant/delete/:id
// @desc    Delete consultant's Profile
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const consultant = await Consultant.findById(id);
      if (!consultant) {
        return res
          .status(404)
          .json({ profile: "There is no Consultant profile for this user" });
      }
      const deletedConsultant = await Consultant.findByIdAndRemove(id);
      const deletedUser = await User.findByIdAndRemove(req.user.id);
      return res.json({ msg: "deleted", data: deletedConsultant });
    } catch (error) {
      return res
        .status(404)
        .json({ consultantnotfound: "Consultant not found" });
    }
  }
);

module.exports = router;

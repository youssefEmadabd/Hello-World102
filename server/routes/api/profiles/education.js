const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Consultant Model
const User = require("../../../models/User");
const Organization = require("../../../models/Organization");
const Education = require("../../../models/Education");

// Load Validation
const validator = require("../../../validation/educationValidation");

// @route   POST api/profiles/education/:id
// @desc    Creates Educational Organization Profile
// @access  Private
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const organization = await Organization.findById(req.params.id);
      if (!organization)
        return res.status(404).send({ error: "Organization not found" });

      const fields = {};
      fields.organization = req.params.id;
      const newEducation = await Education.create(fields);
      return res.json({
        msg: "Education was created successfully",
        data: newEducation
      });
    } catch (error) {
      return res.status(404).json({ educationnotfound: "Education not found" });
    }
  }
);

// @route   GET api/profiles/education/:id
// @desc    Gets educational organization's profile by ID
// @access  private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id).populate(
        "organization"
      );
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });
      return res.json({ data: education });
    } catch (error) {
      return res.status(404).json({ educationnotfound: "Education not found" });
    }
  }
);

// @route POST api/profiles/education/courses/:id
// @decs Adds A Course To Educational Organization's Profile
// @access private
router.post(
  "/courses/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id);
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });
      const isValidated = validator.courseValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const course = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
      };
      education.courses.unshift(course);

      education.save();

      return res.json({
        msg: "Course successfully added",
        data: education.courses
      });
    } catch (error) {
      return res
        .status(404)
        .json({ educationnotfound: "Educational Organization not found" });
    }
  }
);

// @route POST api/profiles/education/trainers/:id
// @decs Adds A Trainer To Educational Organization's Profile
// @access private
router.post(
  "/trainers/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id);
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });
      const isValidated = validator.trainerValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const trainer = {
        name: req.body.name,
        bio: req.body.bio
      };
      education.trainers.unshift(trainer);

      education.save();

      return res.json({
        msg: "Trainer successfully added",
        data: education.trainers
      });
    } catch (error) {
      return res
        .status(404)
        .json({ educationnotfound: "Educational Organization not found" });
    }
  }
);

// @route POST api/profiles/education/certificates/:id
// @decs Adds Certificates To Educational Organization's Profile
// @access private
router.post(
  "/certificates/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id);
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });
      const isValidated = validator.certificateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const certificate = {
        title: req.body.title,
        description: req.body.description
      };
      education.trainers.unshift(certificate);

      education.save();

      return res.json({
        msg: "Certificate successfully added",
        data: education.certificates
      });
    } catch (error) {
      return res
        .status(404)
        .json({ educationnotfound: "Educational Organization not found" });
    }
  }
);

// @route POST api/profiles/education/training-programs/:id
// @decs Adds A Training Program To Educational Organization's Profile
// @access private
router.post(
  "/training-programs/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id);
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });
      const isValidated = validator.programValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const program = {
        title: req.body.title,
        description: req.body.description,
        trainers: req.body.trainers.split(",")
      };
      education.trainingPrograms.unshift(program);

      education.save();

      return res.json({
        msg: "Training Program successfully added",
        data: education.trainingPrograms
      });
    } catch (error) {
      return res
        .status(404)
        .json({ educationnotfound: "Educational Organization not found" });
    }
  }
);

// @route DELETE api/profiles/education/courses/:id
// @decs Deletes A Course From Educational Organization's Profile
// @access private
router.delete(
  "/courses/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id);
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });
      const isValidated = validator.courseValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const course = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
      };
      education.courses.splice(education.courses.indexOf(course), 1);

      education.save();

      return res.json({ msg: "deleted", data: education.courses });
    } catch (error) {
      return res
        .status(404)
        .json({ educationnotfound: "Educational Organization not found" });
    }
  }
);

// @route DELETE api/profiles/education/trainers/:id
// @decs Deletes A Trainer From Educational Organization's Profile
// @access private
router.delete(
  "/trainers/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id);
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });
      const isValidated = validator.trainerValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const trainer = {
        name: req.body.name,
        bio: req.body.bio
      };
      education.trainers.splice(education.trainers.indexOf(trainer), 1);

      education.save();

      return res.json({ msg: "deleted", data: education.trainers });
    } catch (error) {
      return res.status(404).json({ trainernotfound: "Trainer not found" });
    }
  }
);

// @route DELETE api/profiles/education/certificates/:id
// @decs Delete Certificate From Educational Organization's Profile
// @access private
router.delete(
  "/certificates/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id);
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });
      const isValidated = validator.certificateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const certificate = {
        title: req.body.title,
        description: req.body.description
      };
      education.certificates.splice(
        education.certificates.indexOf(certificate),
        1
      );

      education.save();

      return res.json({ msg: "deleted", data: education.certificates });
    } catch (error) {
      return res
        .status(404)
        .json({ educationnotfound: "Educational Organization not found" });
    }
  }
);

// @route DELETE api/profiles/education/training-programs/:id
// @decs Delete A Training Program To Educational Organization's Profile
// @access private
router.delete(
  "/training-programs/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id);
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });
      const isValidated = validator.programValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const program = {
        title: req.body.title,
        description: req.body.description,
        trainers: req.body.trainers.split(",")
      };
      education.trainingPrograms.splice(
        education.trainingPrograms.indexOf(program),
        1
      );

      education.save();

      return res.json({ msg: "deleted", data: education.trainingPrograms });
    } catch (error) {
      return res
        .status(404)
        .json({ educationnotfound: "Educational Organization not found" });
    }
  }
);

// @route   DELETE api/profiles/education/:id
// @desc    Delete education's Profile
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const education = await Education.findById(req.params.id).populate(
        "organization"
      );
      if (!education)
        return res
          .status(404)
          .send({ error: "Educational Organization not found" });

      const deletedEducation = await Education.findByIdAndRemove(req.params.id);
      const deletedOrganization = await Organization.findByIdAndRemove(
        education.organization
      );
      const deletedUser = await User.findByIdAndRemove(
        education.organization.user
      );

      res.json({ msg: "Profile Successfully deleted", data: deletedEducation });
    } catch (error) {
      return res.status(404).json({ membernotfound: "Member not found" });
    }
  }
);

module.exports = router;

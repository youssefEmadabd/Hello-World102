const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const passport = require("passport");

// Load Models
const User = require("../../../models/User");
const Organization = require("../../../models/Organization");

//Load Validation
const validator = require("../../../validation/organizationValidation");

// @route POST api/profiles/organization/
// @decs Creates an Organization's Profile
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

      const organizationFields = {};
      organizationFields.name = req.body.name;
      organizationFields.phone = req.body.phone;
      organizationFields.email = req.body.email;
      organizationFields.address = req.body.address;
      organizationFields.user = req.user.id;

      organizationFields.social = {};
      if (req.body.youtube)
        organizationFields.social.youtube = req.body.youtube;
      if (req.body.facebook)
        organizationFields.social.facebook = req.body.facebook;
      if (req.body.twitter)
        organizationFields.social.twitter = req.body.twitter;
      if (req.body.linkedin)
        organizationFields.social.linkedin = req.body.linkedin;
      if (req.body.instagram)
        organizationFields.social.instagram = req.body.instagram;

      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      organizationFields.avatar = avatar;

      const newOrg = await Organization.create(organizationFields);
      res.json({ msg: "Organization was created successfully", data: newOrg });
    } catch (err) {
      return res.status(404).json({ usernotfound: "User not found" });
    }
  }
);

module.exports = router;

const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      name: Joi.string()
        .min(3)
        .max(40)
        .required(),
      phone: Joi.number().required(),
      email: Joi.string()
        .email()
        .required(),
      age: Joi.number()
        .min(1)
        .max(99)
        .required(),
      skills: Joi.string().required(),
      interests: Joi.string(),
      avatar: Joi.string(),
      youtube: Joi.string().uri(),
      facebook: Joi.string().uri(),
      twitter: Joi.string().uri(),
      linkedin: Joi.string().uri(),
      instagram: Joi.string().uri()
    };

    return Joi.validate(request, createSchema);
  },
  updateValidation: request => {
    const updateSchema = {
      name: Joi.string()
        .min(3)
        .max(40),
      phone: Joi.number(),
      email: Joi.string().email(),
      age: Joi.number()
        .min(1)
        .max(99),
      skills: Joi.string(),
      interests: Joi.string(),
      avatar: Joi.string(),
      youtube: Joi.string().uri(),
      facebook: Joi.string().uri(),
      twitter: Joi.string().uri(),
      linkedin: Joi.string().uri(),
      instagram: Joi.string().uri()
    };

    return Joi.validate(request, updateSchema);
  },
  skillValidation: request => {
    const skillSchema = {
      skill: Joi.string().max(100)
    };
    return Joi.validate(request, skillSchema);
  },
  interestsValidation: request => {
    const interestSchema = {
      interest: Joi.string().max(100)
    };
    return Joi.validate(request, interestSchema);
  },
  eventValidation: request => {
    const eventSchema = {
      title: Joi.string().required(),
      description: Joi.string().required(),
      location: Joi.string().required()
    };
    return Joi.validate(request, eventSchema);
  },
  certificateValidation: request => {
    const certificateSchema = {
      title: Joi.string().required(),
      entity: Joi.string().required(),
      description: Joi.string().required()
    };

    return Joi.validate(request, certificateSchema);
  }
};

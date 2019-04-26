const Joi = require("joi");

module.exports = {
  registerValidation: request => {
    const registerSchema = {
      username: Joi.string()
        .required()
        .error(errors => {
          return {
            message: "username is required"
          };
        }),
      password: Joi.string()
        .min(8)
        .required(),
      password2: Joi.string()
        .min(8)
        .required()
    };

    return Joi.validate(request, registerSchema);
  },
  loginValidation: request => {
    const loginSchema = {
      username: Joi.string().required(),
      password: Joi.string().required()
    };

    return Joi.validate(request, loginSchema);
  }
};

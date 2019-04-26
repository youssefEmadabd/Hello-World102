const Joi = require('joi');

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(40).required(),
            phone: Joi.number().required(),
            email: Joi.string().email().required(),
            address: Joi.string().required(),
            youtube: Joi.string().uri(),
            facebook: Joi.string().uri(),
            twitter: Joi.string().uri(),
            linkedin: Joi.string().uri(),
            instagram: Joi.string().uri(),
            avatar: Joi.string()
        }

        return Joi.validate(request, createSchema)
    }
};
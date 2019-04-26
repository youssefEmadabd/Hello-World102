const Joi = require('joi');

module.exports = {
    postValidation: request => {
        const postSchema = {
            levelOfCommitment: Joi.number().min(1).max(5).required(),
            experienceLevel: Joi.number().min(1).max(5).required(),
            monetaryCompensation: Joi.number().required(),
            skills: Joi.string().required()
        }

        return Joi.validate(request, postSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            levelOfCommitment: Joi.number().min(1).max(5).required(),
            experienceLevel: Joi.number().min(1).max(5).required(),
            monetaryCompensation: Joi.number().required(),
            skills: Joi.string().required()
        }

        return Joi.validate(request, updateSchema)
    },
    respondValidation: request => {
        const respondSchema = {
            response: Joi.string().valid('accepted', 'rejected').required(),
        }

        return Joi.validate(request, respondSchema)
    },
    extraValidation: request => {
        const extraSchema = {
            extra: Joi.string().required(),
        }

        return Joi.validate(request, extraSchema)
    },


};
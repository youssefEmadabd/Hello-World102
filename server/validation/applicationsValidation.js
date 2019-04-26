const Joi = require('joi');

module.exports = {
    submitValidation: request => {
        const submitSchema = {
            description: Joi.string().min(40).max(1000).required(),
            needConsultancy: Joi.boolean().required(),
        }

        return Joi.validate(request, submitSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            description: Joi.string().min(40).max(1000).required(),
            needConsultancy: Joi.boolean().required(),
        }

        return Joi.validate(request, updateSchema)
    },

    messageValidation: request => {
        const messageSchema = {
            text: Joi.string().required()
        }

        return Joi.validate(request, messageSchema)
    },
    respondValidation: request => {
        const respondSchema = {
            response: Joi.string().valid('accepted', 'rejected').required(),
        }

        return Joi.validate(request, respondSchema)
    },


};
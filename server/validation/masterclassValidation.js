const Joi = require('joi');

module.exports = {
    respondValidation: request => {
        const respondSchema = {
            response: Joi.string().valid('accepted', 'rejected').required()
        }

        return Joi.validate(request, respondSchema)
    },
};
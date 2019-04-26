const Joi = require('joi');

module.exports = {
    boardValidation: request => {
        const boardSchema = {
            name: Joi.string().required(),
            position: Joi.string().required()
        }

        return Joi.validate(request, boardSchema)
    },
    eventValidation: request => {
        const eventSchema = {
            title: Joi.string().required(),
            description: Joi.string().required()
        }

        return Joi.validate(request, eventSchema)
    },
    reportValidation:request=>{
        const reportSchema = {
            report:Joi.string().required()
        }
        return Joi.validate(request,reportSchema)
    },
}

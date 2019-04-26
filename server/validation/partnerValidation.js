const Joi = require('joi');

module.exports = {
    createValidation: request => {
        const createSchema = {
            fieldOfWork: Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            fieldOfWork: Joi.string().required()
        }

        return Joi.validate(request, updateSchema)
    },
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
    }

};
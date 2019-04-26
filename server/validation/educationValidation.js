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
    courseValidation: request => {
        const courseSchema = {
            title: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().required()
        }

        return Joi.validate(request, courseSchema)
    },
    trainerValidation: request => {
        const trainerSchema = {
            name: Joi.string().required(),
            bio: Joi.string().required()
        }

        return Joi.validate(request, trainerSchema)
    },
    certificateValidation: request => {
        const certificateSchema = {
            title: Joi.string().required(),
            description: Joi.string().required(),
        }

        return Joi.validate(request, certificateSchema)
    },
    programValidation: request => {
        const programSchema = {
            title: Joi.string().required(),
            description: Joi.string().required(),
            trainers: Joi.string().required()
        }
        return Joi.validate(request, programSchema)
    }

};
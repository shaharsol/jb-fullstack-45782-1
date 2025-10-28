import Joi from "joi";

export const gamesByAudienceIdValidator = Joi.object({
    audienceId: Joi.string().uuid().required()
})

export const createGameValidator = Joi.object({
    audienceId: Joi.string().uuid().required(),
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).required(),
    price: Joi.number().min(1).required()
})
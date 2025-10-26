import Joi from "joi";

export const newPostValidator = Joi.object({
    title: Joi.string().min(10).max(40).uppercase().required(),
    body: Joi.string().min(20).required()
})

export const updatePostValidator = newPostValidator

export const getPostValidator = Joi.object({
    id: Joi.string().uuid()
})
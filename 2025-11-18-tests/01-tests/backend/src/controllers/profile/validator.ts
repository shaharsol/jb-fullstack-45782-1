import Joi from "joi";

export const newPostValidator = Joi.object({
    title: Joi.string().min(10).max(40).uppercase().required(),
    body: Joi.string().min(20).required()
})

export const newPostImageValidator = Joi.object({
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpeg', 'image/png')
    }).unknown(true).optional()
})

export const updatePostValidator = newPostValidator

export const getPostValidator = Joi.object({
    id: Joi.string().uuid()
})
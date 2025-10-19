import Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
})

export const signupValidator = loginValidator.keys({
    name: Joi.string().min(2)
})
import Joi from "joi";

export const gamesByAudienceIdValidator = Joi.object({
    audienceId: Joi.string().uuid().required()
})
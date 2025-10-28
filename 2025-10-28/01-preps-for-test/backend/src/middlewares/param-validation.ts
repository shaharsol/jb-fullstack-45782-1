import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function paramValidation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.params = await validator.validateAsync(req.params)
            next()
        } catch (e) {
            next({
                status: 422,
                message: e.message
            })
        }
    }

}
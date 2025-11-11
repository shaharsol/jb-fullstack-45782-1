import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function fileValidation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.files = await validator.validateAsync(req.files)
            next()
        } catch (e) {
            next({
                status: 422,
                message: e.message
            })
        }
    }

}
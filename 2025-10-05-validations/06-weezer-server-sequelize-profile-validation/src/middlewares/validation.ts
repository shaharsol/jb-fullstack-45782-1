import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function validation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            // const [errors, value] = validator.validate(req.body) <-- this is the old sync way
            req.body = await validator.validateAsync(req.body)
            next()
        } catch (e) {
            next({
                status: 422,
                message: e.message
            })
        }
    }

}
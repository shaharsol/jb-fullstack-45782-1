import { NextFunction, Request, Response } from "express";
import Audience from "../../models/Audience";
export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const audiences = await Audience.findAll()
        res.json(audiences)
    } catch (e) {
        next(e)
    }
}
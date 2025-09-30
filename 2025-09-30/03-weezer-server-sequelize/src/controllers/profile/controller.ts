import { NextFunction, Request, Response } from "express";

export default function getProfile(req: Request, res: Response, next: NextFunction) {
    res.json({
        id: 1,
        name: 'shahar'
    })
}
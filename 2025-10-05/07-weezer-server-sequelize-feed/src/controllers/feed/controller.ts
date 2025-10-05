import { NextFunction, Request, Response } from "express";

export async function getFeed(req: Request, res: Response, next: NextFunction) {
    const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'
    res.json({
        name: 'yossi'
    })
}
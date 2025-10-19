import { NextFunction, Request, Response } from "express";

export default function logger(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err)
    next(err)
}
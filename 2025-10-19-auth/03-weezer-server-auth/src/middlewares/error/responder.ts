import { NextFunction, Request, Response } from "express";

export default function responder(err: any, req: Request, res: Response, next: NextFunction) {
    res.status(err.status || 500).send(err.message || 'internal server error...')
}
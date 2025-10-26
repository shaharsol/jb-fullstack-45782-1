import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import config from 'config'
import User from "../models/User";
import Joi from "joi";

declare global {
    namespace Express {
        interface Request {
            userId: string
        }
    }
}

export default function enforceAuth(req: Request, res: Response, next: NextFunction) {

    const jwtSecret = config.get<string>('app.jwtSecret')

    const authHeader = req.get('Authorization') // this will get the value for the Authorization header

    if (!authHeader) return next({
        status: 401,
        message: 'missing Authorization header'
    })

    if (!authHeader.startsWith('Bearer')) return next({
        status: 401,
        message: 'missing Bearer keyword'
    })

    const parts = authHeader.split(' ')
    const jwt = parts[1]

    if (!jwt) return next({
        status: 401,
        message: 'missing jwt'
    })

    try {
        const user = verify(jwt, jwtSecret) as User
        req.userId = user.id
        console.log(user)
        next()

    } catch (e) {
        next({
            status: 401,
            message: 'invalid jwt'
        })
    }
}
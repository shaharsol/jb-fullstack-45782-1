import { NextFunction, Request, Response } from "express";
import User from "../../models/User";
import config from 'config'
import { createHmac } from "crypto";
import { sign } from "jsonwebtoken";

function hashAndSaltPassword(plainTextPassword: string): string {
    const secret = config.get<string>('app.secret')
    return createHmac('sha256', secret).update(plainTextPassword).digest('hex')
}

export async function signup(req: Request, res: Response, next: NextFunction) {
    try {
        const jwtSecret = config.get<string>('app.jwtSecret')
        req.body.password = hashAndSaltPassword(req.body.password)
        const user = await User.create(req.body)
        const plainData = user.get({ plain: true })
        delete plainData.password
        const jwt = sign(plainData, jwtSecret)
        res.json({ jwt })
    } catch (e) {
        next(e)
    }
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const jwtSecret = config.get<string>('app.jwtSecret')

        const user = await User.findOne({
            where: {
                username: req.body.username,
                password: hashAndSaltPassword(req.body.password)
            }
        })
        if (!user) throw new Error('invalid username and/or password')
        const plainData = user.get({ plain: true })
        delete plainData.password
        const jwt = sign(plainData, jwtSecret)
        res.json({ jwt })
    } catch (e) {
        if (e.message === 'invalid username and/or password') return next({
            status: 401,
            message: 'ya try ta hack us ha? no kidin'
        })
        next(e)
    }
}

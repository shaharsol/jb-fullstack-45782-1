import { NextFunction, Request, Response } from "express";
import User from "../../models/User";
import Follow from "../../models/Follow";

export async function getFollowing(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const { following } = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'following'
            }]
        })

        res.json(following)

    } catch (e) {
        next(e)
    }
}

export async function getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const { followers } = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'followers'
            }]
        })

        res.json(followers)
    } catch (e) {
        next(e)
    }
}

export async function follow(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'
        const follow = await Follow.create({
            followerId: userId,
            followeeId: req.params.id
        })
        res.json(follow)
    } catch (e) {
        next(e)
    }
}

export async function unfollow(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'
        const follow = await Follow.findOne({
            where: {
                followerId: userId,
                followeeId: req.params.id
            }
        })
        if (!follow) throw new Error('followee not found')
        await follow.destroy()
        res.json({
            success: true
        })
    } catch (e) {
        console.log(e)
        if (e.message === 'followee not found') return next({
            status: 422,
            message: 'followee not found'
        })
        next(e)
    }
}


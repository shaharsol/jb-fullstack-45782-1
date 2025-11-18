import { NextFunction, Request, Response } from "express";
import User from "../../models/User";
import Follow from "../../models/Follow";
import socket from "../../io/io";
import SocketMessages from "socket-enums-shaharsolllllll";

export async function getFollowing(req: Request, res: Response, next: NextFunction) {
    try {

        const { following } = await User.findByPk(req.userId, {
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

        const { followers } = await User.findByPk(req.userId, {
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

        const existing = await Follow.findOne({
            where: {
                followerId: req.userId,
                followeeId: req.params.id
            }
        })

        if (existing) throw new Error('follow already exists')

        const follow = await Follow.create({
            followerId: req.userId,
            followeeId: req.params.id
        })
        res.json(follow)

        const followee = (await User.findByPk(req.params.id)).get({plain: true})
        const follower = (await User.findByPk(req.userId)).get({plain: true})

        socket.emit(SocketMessages.NewFollow, {
            from: req.get('x-client-id'),
            followee,
            follower
        })

    } catch (e) {
        if (e.message === 'follow already exists') return next({
            status: 422,
            message: e.message
        })
        next(e)
    }
}

export async function unfollow(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const follow = await Follow.findOne({
            where: {
                followerId: req.userId,
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


import { NextFunction, Request, Response } from "express";
import Post from "../../models/Post";
import User from "../../models/User";
import Comment from "../../models/Comment";
import { newPostValidator } from "./validator";
import postIncludes from "../common/post-includes";
import socket from "../../io/io";
import SocketMessages from "socket-enums-shaharsolllllll";


export async function getProfile(req: Request, res: Response, next: NextFunction) {

    try {
        // const profile = await Post.findAll({ where: { userId } })
        const { posts } = await User.findByPk(req.userId, {
            include: [{
                model: Post,
                ...postIncludes
            }]
        })
        
        res.json(posts)
    } catch (e) {
        next(e)
    }
}

export async function getPost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, postIncludes)
        res.json(post)
    } catch (e) {
        next(e)
    }
}

export async function deletePost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        const deletedRows = await Post.destroy({ where: { id } })
        if (deletedRows === 0) return next({
            status: 404,
            message: 'yo bro, da racord u wana dalete as not yar'
        })
        res.json({ success: true })
    } catch (e) {
        next(e)
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {

    try {
        const newPost = await Post.create({ 
            ...req.body, 
            userId: req.userId, 
            imageUrl: req.imageUrl 
        })
        await newPost.reload(postIncludes)
        res.json(newPost)

        // here i want to send the io server a message
        socket.emit(SocketMessages.NewPost, {
            from: req.get('x-client-id') || 'stam',
            post: newPost
        })

    } catch (e) {
        next(e)
    }
}

export async function updatePost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, postIncludes);
        const { title, body } = req.body
        post.title = title
        post.body = body
        await post.save()
        res.json(post)
    } catch (e) {
        next(e)
    }
}
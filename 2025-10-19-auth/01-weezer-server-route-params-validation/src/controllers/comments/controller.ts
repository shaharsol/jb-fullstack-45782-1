import { NextFunction, Request, Response } from "express";
import Comment from "../../models/Comment";
import User from "../../models/User";

export async function newComment(req: Request<{ postId: string }>, res: Response, next: NextFunction) {
    const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

    try {

        const { postId } = req.params
        const newComment = await Comment.create({ ...req.body, userId, postId })
        await newComment.reload({
            include: [User]
        })
        res.json(newComment)
    } catch (e) {
        next(e)
    }

}
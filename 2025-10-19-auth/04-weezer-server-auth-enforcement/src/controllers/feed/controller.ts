import { NextFunction, Request, Response } from "express";
import sequelize from "../../db/sequelize";
import Post from "../../models/Post";
import User from "../../models/User";
import Comment from "../../models/Comment";
import postIncludes from "../common/post-includes";

export async function getFeed(req: Request, res: Response, next: NextFunction) {
    try {

        const { following } = await User.findByPk(req.userId, {
            include: {
                model: User,
                as: 'following',
                include: [{
                    model: Post,
                    ...postIncludes
                }]
            },
        })

        const feed = following
            .reduce((cumulative: Post[], { posts }) => {
                return [...posts, ...cumulative]
            }, [])
            .sort((a: Post, b: Post) => a.createdAt < b.createdAt ? 1 : -1)

        res.json(feed)

    } catch (e) {
        next(e)
    }


    // how i can query the database WITHOUT sequelize help
    // i.e. i want to code the SQL myself:
    /*
    const feed = await sequelize.query(`
        select 	*
        FROM	follows
        JOIN	users on users.id = follows.followee_id
        JOIN	posts on posts.user_id = users.id
        where	follower_id = '1230ae30-dc4f-4752-bd84-092956f5c633'
        order by posts.created_at DESC
    `, {
        model: Post
    })

    await Promise.all(feed.map(post => post.reload({
        include: [User, {
            model: Comment,
            include: [User]
        }]
    })))

    console.log(feed)
    res.json(feed)
    */
}
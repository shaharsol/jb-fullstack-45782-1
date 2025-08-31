import type User from "./user";

export default interface PostComment {
    id: string,
    postId: string,
    userId: string,
    body: string,
    createdAt: string,
    user: User

}
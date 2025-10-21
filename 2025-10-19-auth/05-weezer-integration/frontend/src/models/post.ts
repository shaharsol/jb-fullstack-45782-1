import type PostComment from "./post-comment";
import type PostDraft from "./post-draft";
import type User from "./user";

export default interface Post extends PostDraft {
    id: string,
    imageUrl: string,
    createdAt: string,
    userId: string,
    user: User,
    comments: PostComment[]
};;;;;;;;;;
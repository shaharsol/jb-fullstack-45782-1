import type PostCommentDraft from "./post-comment-draft";
import type User from "./user";

export default interface PostComment extends PostCommentDraft {
    id: string,
    postId: string,
    userId: string,
    createdAt: string,
    user: User
};;;;;;;;;;
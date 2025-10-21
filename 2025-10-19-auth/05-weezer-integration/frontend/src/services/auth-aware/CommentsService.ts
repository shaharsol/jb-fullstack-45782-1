import type PostCommentDraft from "../../models/post-comment-draft";
import type PostComment from "../../models/post-comment";
import AuthAware from "./AuthAware";

export default class CommentsService extends AuthAware {
    async newComment(postId: string, draft: PostCommentDraft): Promise<PostComment> {
        const { data } = await this.axiosInstance.post<PostComment>(`/comments/${postId}`, draft);
        return data;
    }
}

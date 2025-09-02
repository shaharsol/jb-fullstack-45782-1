import axios from "axios"
import type PostComment from "../models/post-comment"
import type PostCommentDraft from "../models/post-comment-draft"

class CommentsService {
    async newComment(postId: string, draft: PostCommentDraft): Promise<PostComment> {
        const { data } = await axios.post<PostComment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft)
        return data
    }
}

const commentsService = new CommentsService()
export default commentsService
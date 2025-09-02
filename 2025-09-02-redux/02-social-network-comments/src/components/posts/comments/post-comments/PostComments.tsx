import type PostCommentModel from '../../../../models/post-comment'
import PostComment from '../comment/PostComment'
import NewComment from '../new/NewComment'
import './PostComments.css'


interface PostCommentsProps {
    comments: PostCommentModel[]
    postId: string
    newComment(comment: PostCommentModel): void
}
export default function PostComments(props: PostCommentsProps) {

    const { comments, postId, newComment } = props


    return (
        <div className='PostComments'>
            <NewComment
                postId={postId}
                newComment={newComment}
            />
            <div>total comments: {comments.length}</div>
            {comments.map(comment => <PostComment
                key={comment.id}
                comment={comment}
            />)}
        </div>
    )
}
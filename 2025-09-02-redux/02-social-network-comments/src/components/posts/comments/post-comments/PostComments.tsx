import type PostCommentModel from '../../../../models/post-comment'
import PostComment from '../comment/PostComment'
import './PostComments.css'


interface PostCommentsProps {
    comments: PostCommentModel[]
}
export default function PostComments(props: PostCommentsProps) {

    const { comments } = props

    return (
        <div className='PostComments'>
            <div>total comments: {comments.length}</div>
            {comments.map(comment => <PostComment
                key={comment.id}
                comment={comment}
            />)}
        </div>
    )
}
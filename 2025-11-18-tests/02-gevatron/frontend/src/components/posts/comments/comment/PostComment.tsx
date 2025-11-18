import type PostCommentModel from '../../../../models/post-comment';
import './PostComment.css';

interface PostCommentProps {
    comment: PostCommentModel
}
export default function PostComment(props: PostCommentProps) {

    const { user: { name }, body, createdAt } = props.comment;

    return (
        <div className='PostComment'>
            <h6>by {name} on {(new Date(createdAt)).toLocaleDateString()}</h6>
            <div>{body}</div>
        </div>
    );
}
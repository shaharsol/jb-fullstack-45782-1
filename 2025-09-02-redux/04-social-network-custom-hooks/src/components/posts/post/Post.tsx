import { useNavigate } from 'react-router-dom'
import type PostModel from '../../../models/post'
import profileService from '../../../services/profile'
import './Post.css'
import PostComments from '../comments/post-comments/PostComments'
import type PostComment from '../../../models/post-comment'

interface PostProps {
    post: PostModel,
    isEditAllowed: boolean,
    removePost(id: string): void
    newComment(comment: PostComment): void
}

export default function Post(props: PostProps) {

    const {
        title,
        createdAt,
        user: {
            name
        },
        body,
        id,
        imageUrl,
        comments
    } = props.post

    const { removePost, isEditAllowed, newComment } = props

    const navigate = useNavigate()

    async function removeMe() {
        try {
            if (confirm('are you sure?')) {
                await profileService.remove(id)
                removePost(id)
            }
        } catch (e) {
            alert(e)
        }
    }

    function editMe() {
        navigate(`/profile/edit/${id}`)
    }

    return (
        <div className='Post'>
            <div><h3>{title}</h3></div>
            <div>{(new Date(createdAt)).toLocaleDateString()} by {name}</div>
            <div>{body}</div>
            {imageUrl && <div><img src={imageUrl} /></div>}
            {/* conditional rendering (render something depending on a boolean value):  */}
            {isEditAllowed && <div>
                <button onClick={removeMe}>Delete</button><button onClick={editMe}>Edit</button>
            </div>}

            <PostComments
                comments={comments}
                postId={id}
                newComment={newComment}
            />


        </div>
    )
}
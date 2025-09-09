import { useNavigate } from 'react-router-dom'
import type PostModel from '../../../models/post'
import profileService from '../../../services/profile'
import './Post.css'
import PostComments from '../comments/post-comments/PostComments'
import { useAppDispatcher } from '../../../redux/hooks'
import { deletePost } from '../../../redux/profile-slice'

interface PostProps {
    post: PostModel,
    isEditAllowed: boolean,
    isNew?: boolean
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

    const { isEditAllowed, isNew } = props

    const navigate = useNavigate()

    const dispatch = useAppDispatcher()

    async function removeMe() {
        try {
            if (confirm('are you sure?')) {
                await profileService.remove(id)
                dispatch(deletePost(id))
            }
        } catch (e) {
            alert(e)
        }
    }

    function editMe() {
        navigate(`/profile/edit/${id}`)
    }

    const className = `Post ${isNew ? 'new-post' : ''}`

    return (
        <div className={className}>
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
            />


        </div>
    )
}
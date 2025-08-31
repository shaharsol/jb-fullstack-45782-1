import type PostModel from '../../../models/post'
import profileService from '../../../services/profile'
import './Post.css'

interface PostProps {
    post: PostModel,
    isEditAllowed: boolean,
    removePost(id: string): void
}

export default function Post(props: PostProps) {

    const { title, createdAt, user: { name }, comments, id } = props.post
    const { removePost, isEditAllowed } = props

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

    return (
        <li>
            {title} on {(new Date(createdAt)).toLocaleDateString()} by {name} ({comments.length})
            {/* conditional rendering (render something depending on a boolean value):  */}
            {isEditAllowed && <button onClick={removeMe}>Delete</button>}

        </li>
    )
}
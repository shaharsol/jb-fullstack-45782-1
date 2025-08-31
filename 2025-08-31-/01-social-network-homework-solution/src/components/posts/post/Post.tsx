import type PostModel from '../../../models/post'
import profileService from '../../../services/profile'
import './Post.css'

interface PostProps {
    post: PostModel,
    removePost(id: string): void
}

export default function Post(props: PostProps) {

    const { title, createdAt, user: { name }, comments, id } = props.post
    const { removePost } = props

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
            <button onClick={removeMe}>Delete</button>
        </li>
    )
}
import type PostModel from '../../../models/post'
import profileService from '../../../services/profile'
import './Post.css'

interface PostProps {
    post: PostModel,
    isEditAllowed: boolean,
    removePost(id: string): void
}

export default function Post(props: PostProps) {

    const { title, createdAt, user: { name }, body, id, imageUrl } = props.post
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
        <div className='Post'>
            <div><h3>{title}</h3></div>
            <div>{(new Date(createdAt)).toLocaleDateString()} by {name}</div>
            <div>{body}</div>
            {imageUrl && <div><img src={imageUrl} /></div>}
            {/* conditional rendering (render something depending on a boolean value):  */}
            {isEditAllowed && <button onClick={removeMe}>Delete</button>}

        </div>
    )
}
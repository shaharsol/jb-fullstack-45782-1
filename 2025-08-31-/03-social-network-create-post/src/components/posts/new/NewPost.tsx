import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/post-draft'
import './NewPost.css'
import profileService from '../../../services/profile'
import type Post from '../../../models/post'

interface NewPostProps {
    renderNewPost(post: Post): void
}
export default function NewPost(props: NewPostProps) {

    const { renderNewPost } = props

    const { register, handleSubmit, reset } = useForm<PostDraft>()

    async function submit(draft: PostDraft) {
        try {
            const post = await profileService.newPost(draft)
            reset()
            renderNewPost(post)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder="add title" {...register('title')} />
                <textarea placeholder='add content' {...register('body')}></textarea>
                <button>Add Post</button>
            </form>
        </div>
    )
}
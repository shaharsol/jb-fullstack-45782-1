import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/post-draft'
import './NewPost.css'
import profileService from '../../../services/profile'
import type Post from '../../../models/post'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import { useState } from 'react'

interface NewPostProps {
    renderNewPost(post: Post): void
}
export default function NewPost(props: NewPostProps) {

    const { renderNewPost } = props

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    async function submit(draft: PostDraft) {
        try {
            setIsSubmitting(true)
            const post = await profileService.newPost(draft)
            reset()
            renderNewPost(post)
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder="add title" {...register('title', {
                    required: {
                        value: true,
                        message: 'Title is required'
                    },
                    minLength: {
                        value: 10,
                        message: 'Title must be at least 10 characters long'
                    }
                })} />
                <div className='formError'>{formState.errors.title?.message}</div>
                <textarea placeholder='add content' {...register('body', {
                    required: {
                        value: true,
                        message: 'Post content is required'
                    },
                    minLength: {
                        value: 20,
                        message: 'Post content must be at least 20 characters long'
                    }
                })}></textarea>
                <div className='formError'>{formState.errors.body?.message}</div>
                <SpinnerButton
                    buttonText='Add Post'
                    loadingText='adding post'
                    isSubmitting={isSubmitting}
                />
            </form>
        </div>
    )
}
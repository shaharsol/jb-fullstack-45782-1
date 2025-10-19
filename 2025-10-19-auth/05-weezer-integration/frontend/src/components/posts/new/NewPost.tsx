import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/post-draft'
import './NewPost.css'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import { useState } from 'react'
import { useAppDispatcher } from '../../../redux/hooks'
import { newPost } from '../../../redux/profile-slice'
import useService from '../../../hooks/use-service'
import ProfileService from '../../../services/auth-aware/ProfileService'

export default function NewPost() {

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const dispatch = useAppDispatcher()

    const profileService = useService(ProfileService)

    async function submit(draft: PostDraft) {
        try {
            setIsSubmitting(true)
            const post = await profileService.newPost(draft)
            reset()
            dispatch(newPost(post))
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
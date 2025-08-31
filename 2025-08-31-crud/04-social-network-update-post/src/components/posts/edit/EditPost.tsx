import { useNavigate, useParams } from 'react-router-dom'
import './EditPost.css'
import { useEffect } from 'react'
import profileService from '../../../services/profile'
import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/post-draft'

export default function EditPost() {

    const { id } = useParams<'id'>()

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const post = await profileService.getPost(id!)
            const { title, body } = post
            const draft = { title, body }
            reset(draft)

        })()

    }, [])

    async function submit(draft: PostDraft) {
        try {
            await profileService.editPost(id!, draft)
            navigate('/profile')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='EditPost'>
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
                <button>Update Post</button>
            </form>
        </div>
    )
}
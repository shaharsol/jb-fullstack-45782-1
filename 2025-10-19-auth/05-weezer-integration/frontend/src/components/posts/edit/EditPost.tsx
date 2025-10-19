import { useNavigate, useParams } from 'react-router-dom'
import './EditPost.css'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/post-draft'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import Spinner from '../../common/spinner/Spinner'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/profile-slice'
import useService from '../../../hooks/use-service'
import ProfileService from '../../../services/auth-aware/ProfileService'

export default function EditPost() {

    const profileService = useService(ProfileService)

    const { id } = useParams<'id'>()

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [isReady, setIsReady] = useState<boolean>(false)

    const post = useAppSelector(state => state.profileSlice.posts.find(p => p.id === id))
    const dispatch = useAppDispatcher()

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            // const post = await profileService.getPost(id!)
            if (!post) {
                const profileFromServer = await profileService.getProfile()
                dispatch(init(profileFromServer))
            } else {
                const { title, body } = post
                const draft = { title, body }
                reset(draft)
                setIsReady(true)
            }
        })()

    }, [dispatch, id, post, reset])

    async function submit(draft: PostDraft) {
        try {
            setIsSubmitting(true)
            await profileService.editPost(id!, draft)
            navigate('/profile')
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='EditPost'>

            {!isReady && <Spinner />}

            {isReady && <>
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
                        buttonText='Update Post'
                        loadingText='updating post'
                        isSubmitting={isSubmitting}
                    />
                    <input></input>
                </form>
            </>}

        </div>
    )
}
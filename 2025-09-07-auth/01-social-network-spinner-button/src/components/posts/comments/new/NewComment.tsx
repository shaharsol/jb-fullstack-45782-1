import { useForm } from 'react-hook-form'
import type PostCommentDraft from '../../../../models/post-comment-draft'
import './NewComment.css'
import commentsService from '../../../../services/comments'
import type PostComment from '../../../../models/post-comment'
import { useState } from 'react'
import SpinnerButton from '../../../common/spinner-button/SpinnerButton'

interface NewCommentProps {
    postId: string
    newComment(comment: PostComment): void
}
export default function NewComment(props: NewCommentProps) {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const { postId, newComment } = props

    const { register, handleSubmit, reset, formState } = useForm<PostCommentDraft>()

    async function submit(draft: PostCommentDraft) {
        try {
            setIsSubmitting(true)
            const comment = await commentsService.newComment(postId, draft)
            reset()
            newComment(comment)
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }

    }

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(submit)}>
                <textarea {...register('body', {
                    required: {
                        value: true,
                        message: 'Body is required'
                    },
                    minLength: {
                        value: 20,
                        message: 'short comments are not for us'
                    }
                })}></textarea>
                <div className="formError">{formState.errors.body?.message}</div>

                <SpinnerButton
                    buttonText='add comment'
                    loadingText='adding comment'
                    isSubmitting={isSubmitting}
                />
            </form>
        </div>
    )
}
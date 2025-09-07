import { useForm } from 'react-hook-form'
import type PostCommentDraft from '../../../../models/post-comment-draft'
import './NewComment.css'
import commentsService from '../../../../services/comments'
import type PostComment from '../../../../models/post-comment'
import spinnerSource from '../../../../assets/loading1.gif'
import { useState } from 'react'

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
            setIsSubmitting(false)
        } catch (e) {
            alert(e)
        } finally {
            //
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

                {!isSubmitting && <button>add comment</button>}
                {isSubmitting && <span>adding comment <i><img src={spinnerSource} /></i></span>}
            </form>
        </div>
    )
}
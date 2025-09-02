import { useForm } from 'react-hook-form'
import type PostCommentDraft from '../../../../models/post-comment-draft'
import './NewComment.css'
import commentsService from '../../../../services/comments'

interface NewCommentProps {
    postId: string
}
export default function NewComment(props: NewCommentProps) {

    const { postId } = props

    const { register, handleSubmit, reset, formState } = useForm<PostCommentDraft>()

    async function submit(draft: PostCommentDraft) {
        try {
            const comment = await commentsService.newComment(postId, draft)
            reset()
        } catch (e) {
            alert(e)
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
                <button>add comment</button>
            </form>
        </div>
    )
}
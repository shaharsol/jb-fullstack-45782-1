import type PostModel from '../../../models/post'
import './Post.css'

interface PostProps {
    post: PostModel,
}

export default function Post(props: PostProps) {

    const { title, createdAt, user: { name }, comments } = props.post

    return (
        <li>{title} on {(new Date(createdAt)).toLocaleDateString()} by {name} ({comments.length})</li>
    )
}
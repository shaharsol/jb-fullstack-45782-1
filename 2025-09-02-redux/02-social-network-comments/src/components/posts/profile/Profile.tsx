import { useEffect, useState } from 'react'
import './Profile.css'
import profileService from '../../../services/profile'
import type PostModel from '../../../models/post'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import type PostComment from '../../../models/post-comment'

export default function Profile() {

    console.log('rendering...')

    const [profile, setProfile] = useState<PostModel[]>([])

    useEffect(() => {
        (async () => {
            try {
                const profileFromServer = await profileService.getProfile()
                setProfile(profileFromServer)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    function removePost(id: string): void {
        setProfile(profile.filter(post => post.id !== id))
    }

    function renderNewPost(post: PostModel): void {
        setProfile([post, ...profile])
    }

    function newComment(comment: PostComment) {
        const post = profile.find(post => post.id === comment.postId)
        post?.comments.push(comment)
        setProfile([...profile])
    }

    return (
        <div className='Profile'>
            <NewPost
                renderNewPost={renderNewPost}
            />
            {profile.map(post => <Post
                key={post.id}
                post={post}
                removePost={removePost}
                isEditAllowed={true}
                newComment={newComment}
            />)}
        </div>
    )
}
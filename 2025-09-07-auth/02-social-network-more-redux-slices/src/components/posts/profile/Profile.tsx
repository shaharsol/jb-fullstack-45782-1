import { useEffect, useState } from 'react'
import './Profile.css'
import profileService from '../../../services/profile'
import type PostModel from '../../../models/post'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import type PostComment from '../../../models/post-comment'
import Spinner from '../../common/spinner/Spinner'
import useTitle from '../../../hooks/use-title'


export default function Profile() {

    useTitle('Profile')

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
        const newProfile = [...profile]
        const post = newProfile.find(post => post.id === comment.postId)
        post?.comments.push(comment)
        // setProfile(profile)
        setProfile(newProfile)
    }

    return (
        <div className='Profile'>
            {profile.length > 0 && <>
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
            </>}
            {profile.length === 0 && <Spinner />}
        </div>
    )
}
import { useEffect, useState } from 'react'
import './Profile.css'
import profileService from '../../../services/profile'
import type PostModel from '../../../models/post'
import Post from '../post/Post'

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

    return (
        <div className='Profile'>
            {profile.map(post => <Post
                key={post.id}
                post={post}
                removePost={removePost}
                isEditAllowed={true}
            />)}
        </div>
    )
}
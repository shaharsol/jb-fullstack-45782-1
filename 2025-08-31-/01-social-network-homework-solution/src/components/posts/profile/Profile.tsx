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

    return (
        <div className='Profile'>
            <ul>
                {profile.map(post => <Post key={post.id} post={post} />)}
            </ul>
        </div>
    )
}
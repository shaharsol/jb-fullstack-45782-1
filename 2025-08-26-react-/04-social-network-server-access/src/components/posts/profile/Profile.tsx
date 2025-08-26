import { useEffect, useState } from 'react'
import './Profile.css'
import profileService from '../../../services/profile'
import type Post from '../../../models/post'

export default function Profile() {

    console.log('rendering...')

    const [profile, setProfile] = useState<Post[]>([])

    useEffect(() => {
        (async () => {
            try {
                const profile = await profileService.getProfile()
                setProfile(profile)
            } catch (e) {
                alert(e)
            }
        })()

        return () => {

        }
    }, [])

    return (
        <div className='Profile'>
            <ul>
                {profile.map(({ id, title, user: { name }, createdAt, comments }) => <li key={id}>{title} on {(new Date(createdAt)).toLocaleDateString()} by {name} ({comments.length})</li>)}
            </ul>
        </div>
    )
}
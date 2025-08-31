import { useEffect, useState } from 'react'
import './Followers.css'
import type User from '../../../models/user'
import followersService from '../../../services/followers'

export default function Followers() {
    const [followers, setFollowers] = useState<User[]>([])

    useEffect(() => {
        followersService.getFollowers()
            .then(setFollowers)
            .catch(alert)
    }, [])

    return (
        <div className='Followers'>
            <ul>
                {followers.map(({ id, name }) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}
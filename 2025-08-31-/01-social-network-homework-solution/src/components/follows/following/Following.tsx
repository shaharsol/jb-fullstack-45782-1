import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/user'
import followingService from '../../../services/following'

export default function Following() {

    const [following, setFollowing] = useState<User[]>([])

    useEffect(() => {
        followingService.getFollowing()
            .then(setFollowing)
            .catch(alert)
    }, [])

    return (
        <div className='Following'>
            <ul>
                {following.map(({ id, name }) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}
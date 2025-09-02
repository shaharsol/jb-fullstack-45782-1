import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/user'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'

export default function Following() {

    const [following, setFollowing] = useState<User[]>([])

    useEffect(() => {
        followingService.getFollowing()
            .then(setFollowing)
            .catch(alert)
    }, [])

    function unfollow(id: string) {
        setFollowing(following.filter(follow => follow.id !== id))
    }

    return (
        <div className='Following'>
            {following.map(follow => <Follow
                key={follow.id} user={follow}
                isFollowing={true}
                unfollow={unfollow}
            />)}
        </div>
    )
}
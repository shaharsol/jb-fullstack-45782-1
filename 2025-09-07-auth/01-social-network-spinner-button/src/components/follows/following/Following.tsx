import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/user'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'
import Spinner from '../../common/spinner/Spinner'

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
            {following.length > 0 && <>
                {following.map(follow => <Follow
                    key={follow.id} user={follow}
                    isFollowing={true}
                    unfollow={unfollow}
                />)}
            </>}

            {following.length === 0 && <Spinner />}
        </div>
    )
}
import { useState } from 'react'
import type User from '../../../models/user'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import './Follow.css'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { follow, unfollow } from '../../../redux/following-slice'
import { indicateNewContentAvailable } from '../../../redux/feed-slice'
import useService from '../../../hooks/use-service'
import FollowingService from '../../../services/auth-aware/FollowingService'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps) {

    const { user } = props

    const { id, name } = user

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const amIFollowing = useAppSelector(store => store.followingSlice.following.findIndex(f => f.id === id) > -1)

    const dispatch = useAppDispatcher()

    const followingService = useService(FollowingService)

    async function unfollowMe() {
        try {
            setIsSubmitting(true)
            await followingService.unfollow(id)
            dispatch(unfollow(id))
            dispatch(indicateNewContentAvailable())
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    async function followMe() {
        try {
            setIsSubmitting(true)
            await followingService.follow(id)
            dispatch(follow(user))
            dispatch(indicateNewContentAvailable())
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
        <div className='Follow'>
            <img src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg" />
            <div>{name}</div>
            <div>
                {amIFollowing && <SpinnerButton
                    onClick={unfollowMe}
                    buttonText='unfollow'
                    loadingText='unfollowing'
                    isSubmitting={isSubmitting}
                />}

                {!amIFollowing && <SpinnerButton
                    onClick={followMe}
                    buttonText='follow'
                    loadingText='following'
                    isSubmitting={isSubmitting}
                />}

            </div>
        </div>
    )
}
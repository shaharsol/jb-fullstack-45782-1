import { useState } from 'react'
import type User from '../../../models/user'
import followingService from '../../../services/following'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import './Follow.css'

interface FollowProps {
    user: User
    isFollowing?: boolean
    unfollow?(id: string): void
}
export default function Follow(props: FollowProps) {

    const { user: { id, name }, isFollowing, unfollow } = props

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)


    async function unfollowMe() {
        try {
            setIsSubmitting(true)
            if (unfollow) {
                await followingService.unfollow(id)
                unfollow(id)
            }
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
                {isFollowing && <SpinnerButton
                    onClick={unfollowMe}
                    buttonText='unfollow'
                    loadingText='unfollowing'
                    isSubmitting={isSubmitting}
                />}
            </div>
        </div>
    )
}
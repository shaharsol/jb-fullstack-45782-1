import type User from '../../../models/user'
import './Follow.css'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps) {

    const { name } = props.user

    return (
        <div className='Follow'>
            <img src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg" />
            <div>{name}</div>
        </div>
    )
}
import type User from '../../../models/user'
import './Follow.css'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps) {

    const { name } = props.user

    return (
        <li className='User'>
            {name}
        </li>
    )
}
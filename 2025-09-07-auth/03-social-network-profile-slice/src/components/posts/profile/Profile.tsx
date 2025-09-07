import { useEffect } from 'react'
import './Profile.css'
import profileService from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Spinner from '../../common/spinner/Spinner'
import useTitle from '../../../hooks/use-title'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/profile-slice'

export default function Profile() {

    useTitle('Profile')

    // const [profile, setProfile] = useState<PostModel[]>([])
    const profile = useAppSelector(state => state.profileSlice.posts)
    const dispatch = useAppDispatcher()

    useEffect(() => {
        (async () => {
            try {
                const profileFromServer = await profileService.getProfile()
                dispatch(init(profileFromServer))
            } catch (e) {
                alert(e)
            }
        })()
    }, [dispatch])

    return (
        <div className='Profile'>
            {profile.length > 0 && <>
                <NewPost />
                {profile.map(post => <Post
                    key={post.id}
                    post={post}
                    isEditAllowed={true}
                />)}
            </>}
            {profile.length === 0 && <Spinner />}
        </div>
    )
}
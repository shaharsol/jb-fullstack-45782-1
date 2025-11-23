import { useEffect } from 'react';
import './Profile.css';
import Post from '../post/Post';
import NewPost from '../new/NewPost';
import Spinner from '../../common/spinner/Spinner';
import useTitle from '../../../hooks/use-title';
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks';
import { init, postAged } from '../../../redux/profile-slice';
import useService from '../../../hooks/use-service';
import ProfileService from '../../../services/auth-aware/ProfileService';

export default function Profile() {

    useTitle('Profile');

    const profileService = useService(ProfileService);

    const newPost = useAppSelector(state => state.profileSlice.newPost);
    const profile = useAppSelector(state => state.profileSlice.posts);
    const dispatch = useAppDispatcher();

    useEffect(() => {
        (async () => {
            try {
                if (profile.length === 0) {
                    const profileFromServer = await profileService.getProfile();
                    dispatch(init(profileFromServer));
                }
            } catch (e) {
                alert(e);
            }
        })();
    }, [dispatch, profile.length]);

    useEffect(() => {
        if (newPost) {
            setTimeout(() => {
                dispatch(postAged());
            }, 2000);
        }
    }, [dispatch, newPost]);

    return (
        <div className='Profile'>
            {profile.length > 0 && <>
                <NewPost />
                {newPost && <Post
                    key={newPost.id}
                    post={newPost}
                    isEditAllowed={true}
                    isNew={true}
                />}
                {profile.map(post => <Post
                    key={post.id}
                    post={post}
                    isEditAllowed={true}
                />)}
            </>}
            {profile.length === 0 && <Spinner />}
        </div>
    );
}
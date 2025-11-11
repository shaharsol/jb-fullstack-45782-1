import { useEffect, useState } from 'react';
import './Feed.css';
import Post from '../post/Post';
import Spinner from '../../common/spinner/Spinner';
import useTitle from '../../../hooks/use-title';
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/feed-slice';
import SpinnerButton from '../../common/spinner-button/SpinnerButton';
import useService from '../../../hooks/use-service';
import FeedService from '../../../services/auth-aware/FeedService';

export default function Feed() {

    useTitle('Feed');

    const feedService = useService(FeedService);

    const feed = useAppSelector(state => state.feedSlice.posts);
    const isNewContentAvailable = useAppSelector(state => state.feedSlice.isNewContentAvailable);
    const dispatch = useAppDispatcher();
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

    useEffect(() => {

        (async () => {
            try {
                if (feed.length === 0) {
                    const feedFromServer = await feedService.getFeed();
                    dispatch(init(feedFromServer));
                }
            } catch (e) {
                alert(e);
            }
        })();

    }, [dispatch, feed.length]);


    async function refresh() {
        try {
            setIsRefreshing(true);
            const feedFromServer = await feedService.getFeed();
            dispatch(init(feedFromServer));
        } catch (e) {
            alert(e);
        } finally {
            setIsRefreshing(false);
        }
    }

    return (
        <div className='Feed'>
            {feed.length > 0 && <>

                {isNewContentAvailable && <div className='info-box'>
                    you have new content available, please refresh <SpinnerButton
                        buttonText='refresh'
                        loadingText='refreshing'
                        onClick={refresh}
                        isSubmitting={isRefreshing}
                    />
                </div>}

                {feed.map(post => <Post
                    key={post.id}
                    post={post}
                    isEditAllowed={false}
                />)}
            </>}

            {feed.length === 0 && <Spinner />}
        </div>
    );
}
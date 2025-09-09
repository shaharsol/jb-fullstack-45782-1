import { useEffect } from 'react'
import './Feed.css'
import feedService from '../../../services/feed'
import Post from '../post/Post'
import Spinner from '../../common/spinner/Spinner'
import useTitle from '../../../hooks/use-title'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/feed-slice'

export default function Feed() {

    useTitle('Feed')

    const feed = useAppSelector(state => state.feedSlice.posts)
    const dispatch = useAppDispatcher()

    useEffect(() => {

        (async () => {
            try {
                if (feed.length === 0) {
                    const feedFromServer = await feedService.getFeed()
                    dispatch(init(feedFromServer))
                }
            } catch (e) {
                alert(e)
            }
        })()

    }, [dispatch, feed.length])

    return (
        <div className='Feed'>
            {feed.length > 0 && <>
                {feed.map(post => <Post
                    key={post.id}
                    post={post}
                    isEditAllowed={false}
                />)}
            </>}

            {feed.length === 0 && <Spinner />}
        </div>
    )
}
import { useEffect, useState } from 'react'
import type PostModel from '../../../models/post'
import './Feed.css'
import feedService from '../../../services/feed'
import Post from '../post/Post'

export default function Feed() {

    const [feed, setFeed] = useState<PostModel[]>([])

    useEffect(() => {
        feedService.getFeed()
            .then(setFeed)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>
            <ul>
                {feed.map(post => <Post key={post.id} post={post} />)}
            </ul>
        </div>
    )
}
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

    function removeMe(id: string): void {
        console.log(id)
    }

    return (
        <div className='Feed'>
            <ul>
                {feed.map(post => <Post
                    key={post.id}
                    post={post}
                    isEditAllowed={false}
                    removePost={removeMe}
                />)}
            </ul>
        </div>
    )
}
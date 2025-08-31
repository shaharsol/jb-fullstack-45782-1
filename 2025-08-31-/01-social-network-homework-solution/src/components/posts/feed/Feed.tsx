import { useEffect, useState } from 'react'
import type Post from '../../../models/post'
import './Feed.css'
import feedService from '../../../services/feed'

export default function Feed() {

    const [feed, setFeed] = useState<Post[]>([])

    useEffect(() => {
        feedService.getFeed()
            .then(setFeed)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>
            <ul>
                {feed.map(({ id, title, user: { name }, createdAt, comments }) => <li key={id}>{title} on {(new Date(createdAt)).toLocaleDateString()} by {name} ({comments.length})</li>)}
            </ul>
        </div>
    )
}
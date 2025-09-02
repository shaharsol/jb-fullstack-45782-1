import { useEffect, useState } from 'react'
import type PostModel from '../../../models/post'
import './Feed.css'
import feedService from '../../../services/feed'
import Post from '../post/Post'
import type PostComment from '../../../models/post-comment'
import Spinner from '../../common/spinner/Spinner'

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

    function newComment(comment: PostComment) {
        const newFeed = [...feed]
        const post = newFeed.find(post => post.id === comment.postId)
        post?.comments.push(comment)
        // setProfile(profile)
        setFeed(newFeed)
    }


    return (
        <div className='Feed'>
            {feed.length > 0 && <>
                {feed.map(post => <Post
                    key={post.id}
                    post={post}
                    isEditAllowed={false}
                    removePost={removeMe}
                    newComment={newComment}
                />)}
            </>}

            {feed.length === 0 && <Spinner />}
        </div>
    )
}
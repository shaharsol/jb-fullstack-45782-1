import type Post from "../models/post"

class FeedService {
    async getFeed(): Promise<Post[]> {
        const feed = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/feed`).then<Post[]>(response => response.json())
        return feed
    }
}

const feedService = new FeedService()
export default feedService
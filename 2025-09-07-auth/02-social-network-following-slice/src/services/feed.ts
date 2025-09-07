import axios from "axios"
import type Post from "../models/post"

class FeedService {
    async getFeed(): Promise<Post[]> {
        const { data } = await axios<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/feed`)
        return data
    }


}

const feedService = new FeedService()
export default feedService
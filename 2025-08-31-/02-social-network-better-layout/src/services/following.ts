import axios from "axios"
import type User from "../models/user"

class FollowingService {
    async getFollowing(): Promise<User[]> {
        const { data } = await axios<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return data
    }
}

const followingService = new FollowingService()
export default followingService
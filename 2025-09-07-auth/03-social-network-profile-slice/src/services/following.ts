import axios from "axios"
import type User from "../models/user"

class FollowingService {
    async getFollowing(): Promise<User[]> {
        const { data } = await axios<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return data
    }

    async unfollow(userId: string): Promise<boolean> {
        const { data } = await axios.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${userId}`)
        return data
    }

    async follow(userId: string): Promise<boolean> {
        const { data } = await axios.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/follow/${userId}`)
        return data
    }

}

const followingService = new FollowingService()
export default followingService
import axios from "axios"
import type User from "../models/user"

class FollowersService {
    async getFollowers(): Promise<User[]> {
        const { data } = await axios<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/followers`)
        return data
    }
}

const followersService = new FollowersService()
export default followersService
import type User from "../models/user"

class FollowersService {
    async getFollowers(): Promise<User[]> {
        const followers = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/follows/followers`).then<User[]>(response => response.json())
        return followers
    }
}

const followersService = new FollowersService()
export default followersService
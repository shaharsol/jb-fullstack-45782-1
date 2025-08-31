import type User from "../models/user"

class FollowingService {
    async getFollowing(): Promise<User[]> {
        const following = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`).then<User[]>(response => response.json())
        return following
    }
}

const followingService = new FollowingService()
export default followingService
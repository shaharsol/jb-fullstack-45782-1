import type Post from "../models/post"

class ProfileService {
    async getProfile(): Promise<Post[]> {
        const profile = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/profile`).then<Post[]>(response => response.json())
        return profile
    }
}

const profileService = new ProfileService()
export default profileService
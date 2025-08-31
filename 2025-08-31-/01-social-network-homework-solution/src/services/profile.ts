import type Post from "../models/post"

class ProfileService {
    async getProfile(): Promise<Post[]> {
        const profile = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/profile`).then<Post[]>(response => response.json())
        return profile
    }

    async remove(id: string): Promise<boolean> {
        const deleted = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`, { method: 'DELETE' }).then<boolean>(response => response.json())
        return deleted
    }
}

const profileService = new ProfileService()
export default profileService
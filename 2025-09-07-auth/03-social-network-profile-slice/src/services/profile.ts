import axios from "axios"
import type Post from "../models/post"
import type PostDraft from "../models/post-draft"

class ProfileService {
    async getProfile(): Promise<Post[]> {
        const response = await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return response.data
    }

    async remove(id: string): Promise<boolean> {
        const response = await axios.delete(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return response.data
    }

    async newPost(draft: PostDraft): Promise<Post> {
        const response = await axios.post<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`, draft)
        return response.data
    }

    async getPost(id: string): Promise<Post> {
        const response = await axios<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return response.data
    }

    async editPost(id: string, draft: PostDraft): Promise<Post> {
        const response = await axios.patch<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`, draft)
        return response.data
    }

}

const profileService = new ProfileService()
export default profileService
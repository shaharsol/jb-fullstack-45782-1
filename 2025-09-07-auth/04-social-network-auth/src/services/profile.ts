import axios from "axios"
import type Post from "../models/post"
import type PostDraft from "../models/post-draft"

class ProfileService {
    async getProfile(): Promise<Post[]> {

        const options = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRiMTE5M2NjLTdiYTEtNDYyYy05OWM1LTJlM2VhNGFiNmQxNCIsIm5hbWUiOiJBbGljZSIsInVzZXJuYW1lIjoiYWxpY2UwIiwicGFzc3dvcmQiOiI3Zjc3MzdmZGRkMjg0MmJjMmFmZGJmMTg2OGFhYThlOTg2YjgzMTMzYTFmMDEwZmU5NjUzNWMxNWU0NTg0NjI4IiwiY3JlYXRlZEF0IjoiMjAyNS0wOS0wN1QwODo1NToxNy45NjBaIiwidXBkYXRlZEF0IjoiMjAyNS0wOS0wN1QwODo1NToxNy45NjBaIiwiaWF0IjoxNzU3MjQzNDc2fQ.vnz_0wMKV94D02oGwpVRKAwOWIue4CyMd9GjSNUrZhY`
            }
        }
        const response = await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`, options)
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
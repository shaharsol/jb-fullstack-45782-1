import type Post from "../../models/post";
import AuthAware from "./AuthAware";
import type PostDraft from "../../models/post-draft";

export default class ProfileService extends AuthAware {

    async getProfile(): Promise<Post[]> {
        const response = await this.axiosInstance.get<Post[]>(`/profile`);
        return response.data;
    }

    async remove(id: string): Promise<boolean> {
        const response = await this.axiosInstance.delete(`/profile/${id}`);
        return response.data;
    }

    async newPost(draft: PostDraft): Promise<Post> {
        const response = await this.axiosInstance.post<Post>(`/profile`, draft, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }

    async getPost(id: string): Promise<Post> {
        const response = await this.axiosInstance<Post>(`/profile/${id}`);
        return response.data;
    }

    async editPost(id: string, draft: PostDraft): Promise<Post> {
        const response = await this.axiosInstance.patch<Post>(`/profile/${id}`, draft);
        return response.data;
    }
}
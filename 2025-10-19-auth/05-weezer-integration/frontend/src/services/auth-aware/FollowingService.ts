import AuthAware from "./AuthAware";
import type User from "../../models/user";

export default class FollowingService extends AuthAware {
    async getFollowing(): Promise<User[]> {
        const { data } = await this.axiosInstance<User[]>(`/follows/following`);
        return data;
    }

    async unfollow(userId: string): Promise<boolean> {
        const { data } = await this.axiosInstance.post<boolean>(`/follows/unfollow/${userId}`);
        return data;
    }

    async follow(userId: string): Promise<boolean> {
        const { data } = await this.axiosInstance.post<boolean>(`/follows/follow/${userId}`);
        return data;
    }

}

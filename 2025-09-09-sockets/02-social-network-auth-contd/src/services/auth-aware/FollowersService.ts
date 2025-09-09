import type User from "../../models/user"
import AuthAware from "./AuthAware"

export default class FollowersService extends AuthAware {
    async getFollowers(): Promise<User[]> {
        const { data } = await this.axiosInstance<User[]>(`/follows/followers`)
        return data
    }
}

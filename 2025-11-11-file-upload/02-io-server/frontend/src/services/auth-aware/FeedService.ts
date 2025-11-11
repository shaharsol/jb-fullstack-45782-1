import type Post from "../../models/post";
import AuthAware from "./AuthAware";

export default class FeedService extends AuthAware {
    async getFeed(): Promise<Post[]> {
        const { data } = await this.axiosInstance<Post[]>(`/feed`);
        return data;
    }


}



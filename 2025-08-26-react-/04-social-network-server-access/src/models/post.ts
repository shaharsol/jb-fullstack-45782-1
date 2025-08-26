import type User from "./user";

export default interface Post {
    id: string,
    userId: string,
    title: string,
    body: string,
    imageUrl: string,
    createdAt: string,
    user: User
}
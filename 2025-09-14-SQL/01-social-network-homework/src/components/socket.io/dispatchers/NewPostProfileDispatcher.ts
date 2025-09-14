import type Post from "../../../models/post"
import { newPost } from "../../../redux/profile-slice"
import Dispatcher from "./Dispatcher"

export default class NewPostProfileDispacther extends Dispatcher {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    shouldDispatch(payload: any): boolean {
        return (payload.post as Post).user.id === this.userId
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    doDispatch(payload: any): void {
        this.dispatch(newPost(payload.post as Post))
    }
}
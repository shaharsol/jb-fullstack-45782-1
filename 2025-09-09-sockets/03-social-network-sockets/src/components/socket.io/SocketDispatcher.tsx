import { useEffect, useState, type PropsWithChildren } from "react";
import { io } from "socket.io-client";
import type Post from "../../models/post";
import type User from "../../models/user";
import { useAppDispatcher } from "../../redux/hooks";
import { newPost } from "../../redux/profile-slice";
import useUserId from "../../hooks/use-user-id";
import { newFollower } from "../../redux/followers-slice";
import { follow } from "../../redux/following-slice";
import { v4 } from "uuid";
import SocketDispatcherContext from "./SocketDispatcherContext";

export default function SocketDispatcher(props: PropsWithChildren) {

    const dispatch = useAppDispatcher()
    const userId = useUserId()

    const [clientId] = useState<string>(v4())

    useEffect(() => {
        const socket = io(`${import.meta.env.VITE_IO_SERVER_URL}`)
        socket.onAny((eventName: string, payload) => {
            if (payload.from === clientId) return;
            switch (eventName) {
                case 'new-post':
                    if ((payload.post as Post).user.id === userId) {
                        dispatch(newPost(payload.post as Post))
                    }
                    break;
                case 'new-follow':
                    if (userId === (payload.followee as User).id) {
                        dispatch(newFollower((payload.follower as User)))
                    } else if (userId === (payload.follower as User).id) {
                        dispatch(follow(payload.followee as User))
                    }
                    break;
            }
        })

        return () => { socket.disconnect() }
    }, [dispatch, userId])



    const { children } = props

    return (
        <SocketDispatcherContext.Provider value={{ clientId }}>
            {children}
        </SocketDispatcherContext.Provider>
    )
}
import { useEffect, type PropsWithChildren } from "react";
import { io } from "socket.io-client";
import type Post from "../../models/post";
import type User from "../../models/user";
import { useAppDispatcher } from "../../redux/hooks";
import { newPost } from "../../redux/profile-slice";

export default function SocketDispatcher(props: PropsWithChildren) {

    const dispatch = useAppDispatcher()

    useEffect(() => {
        const socket = io(`${import.meta.env.VITE_IO_SERVER_URL}`)
        socket.onAny((eventName: string, payload) => {
            switch (eventName) {
                case 'new-post':
                    console.log(payload)
                    dispatch(newPost(payload.post as Post))
                    break;
                case 'new-follow':

                    console.log(payload as { followee: User, follower: User })
                    break;
            }
        })
    }, [])



    const { children } = props

    return (
        <>
            {children}
        </>
    )
}
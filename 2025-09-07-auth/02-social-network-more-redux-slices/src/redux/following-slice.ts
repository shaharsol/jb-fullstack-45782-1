import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type User from "../models/user";

interface FollowingState {
    following: User[]
}

const initialState: FollowingState = {
    following: []
}

export const followingSlice = createSlice({
    name: 'following',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.following = action.payload
        },
        follow: (state, action: PayloadAction<User>) => {
            state.following.push(action.payload)
        },
        unfollow: (state, action: PayloadAction<string>) => {
            state.following = state.following.filter(f => f.id !== action.payload)
        }
    }
})

export const { init, follow, unfollow } = followingSlice.actions

export default followingSlice.reducer
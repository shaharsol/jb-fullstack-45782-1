import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type User from "../models/user";

interface FollowersState {
    followers: User[],
    isActive: boolean
}

const initialState: FollowersState = {
    followers: [],
    isActive: true
}

export const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.followers = action.payload
        },
        newFollower: (state, action: PayloadAction<User>) => {
            state.followers.push(action.payload)
        },
        followerRemoved: (state, action: PayloadAction<string>) => {
            state.followers = state.followers.filter(follow => follow.id !== action.payload)
        }
    }
})

export const { init, newFollower, followerRemoved } = followersSlice.actions

export default followersSlice.reducer
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Post from "../models/post";
import type PostComment from "../models/post-comment";

interface ProfileState {
    posts: Post[]
}

const initialState: ProfileState = {
    posts: []
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        },
        newPost: (state, action: PayloadAction<Post>) => {
            state.posts = [action.payload, ...state.posts]
        },
        updatePost: (state, action: PayloadAction<Post>) => {
            const idx = state.posts.findIndex(p => p.id === action.payload.id)
            if (idx > -1) state.posts[idx] = action.payload
        },
        newComment: (state, action: PayloadAction<PostComment>) => {
            const post = state.posts.find(p => p.id === action.payload.postId)
            post?.comments.push(action.payload)
        },
        deletePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload)
        }
    }
})

export const { init, newPost, updatePost, newComment, deletePost } = profileSlice.actions

export default profileSlice.reducer
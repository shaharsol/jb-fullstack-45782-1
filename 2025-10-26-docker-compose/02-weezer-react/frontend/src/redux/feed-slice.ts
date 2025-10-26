import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Post from "../models/post";
import type PostComment from "../models/post-comment";

interface FeedState {
    posts: Post[],
    isNewContentAvailable: boolean
}

const initialState: FeedState = {
    posts: [],
    isNewContentAvailable: false
};

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
            state.isNewContentAvailable = false;
        },
        newComment: (state, action: PayloadAction<PostComment>) => {
            const post = state.posts.find(p => p.id === action.payload.postId);
            post?.comments.push(action.payload);
        },
        indicateNewContentAvailable: (state) => {
            state.isNewContentAvailable = true;
        }
    }
});

export const { init, newComment, indicateNewContentAvailable } = feedSlice.actions;

export default feedSlice.reducer;
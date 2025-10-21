import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Post from "../models/post";
import type PostComment from "../models/post-comment";



interface ProfileState {
    newPost?: Post
    posts: Post[]
}

const initialState: ProfileState = {
    newPost: undefined,
    posts: []
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        newPost: (state, action: PayloadAction<Post>) => {
            // state.posts = [action.payload, ...state.posts]
            state.newPost = action.payload;
        },
        updatePost: (state, action: PayloadAction<Post>) => {
            const idx = state.posts.findIndex(p => p.id === action.payload.id);
            if (idx > -1) state.posts[idx] = action.payload;
        },
        newComment: (state, action: PayloadAction<PostComment>) => {
            const post = state.posts.find(p => p.id === action.payload.postId);
            post?.comments.push(action.payload);
        },
        deletePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload);
        },
        postAged: (state) => {
            if (state.newPost) {
                state.posts = [state.newPost, ...state.posts];
                state.newPost = undefined;
            }
        }
    }
});

export const { init, newPost, updatePost, newComment, deletePost, postAged } = profileSlice.actions;

export default profileSlice.reducer;
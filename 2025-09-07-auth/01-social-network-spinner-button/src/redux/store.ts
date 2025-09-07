import { configureStore } from "@reduxjs/toolkit";
import { followersSlice } from "./followers-slice";

const store = configureStore({
    reducer: {
        followersSlice: followersSlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
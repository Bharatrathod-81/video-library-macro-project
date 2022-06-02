import { configureStore } from "@reduxjs/toolkit";
import { videoReducer } from "../slices/videos-slice";

export const store = configureStore({
    reducer: {
        videos : videoReducer,
    },
})
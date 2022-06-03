import { configureStore } from "@reduxjs/toolkit";
import { operatorReducer } from "../slices/operatorSlice";
import { videoReducer } from "../slices/videos-slice";

export const store = configureStore({
    reducer: {
        videos : videoReducer,
        operators : operatorReducer,
    },
})
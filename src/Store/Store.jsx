import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice";
import { operatorReducer } from "../slices/operatorSlice";
import { playlistReducer } from "../slices/playListSlice";
import { userReducer } from "../slices/userSlice";
import { videoReducer } from "../slices/videos-slice";


export const store = configureStore({
    reducer: {
        videos : videoReducer,
        operators : operatorReducer,
        auth : authReducer,
        user : userReducer,
        playlist : playlistReducer,
    },
})
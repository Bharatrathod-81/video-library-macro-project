import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    videos : [],
    loading: false,
};

export const getVideos = createAsyncThunk(
    "videos/getVideos",
    async () => {
        try{
            const res = await axios.get("api/videos")
            const data = res.data.videos;
            return data
        } catch {
            const data = "opps there is an error try again";
            return data
        }
    }
)


export const videosSlice = createSlice({
    name:"videos",
    initialState,
    reducers:() => {
    },
    extraReducers:{
        [getVideos.pending] : (state) => {
            state.loading = true;
        },
        [getVideos.fulfilled] : (state,{ payload }) => {
            state.loading = false;
            state.videos = payload;
        },
        [getVideos.rejected] : (state,{ payload }) => {
            state.loading = false;
            console.log(payload);
        }
    }
})

export const videoReducer = videosSlice.reducer
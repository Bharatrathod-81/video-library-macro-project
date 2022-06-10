import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const postNewPlayList = createAsyncThunk(

    "playlist/postNewPlayList",
    async (requestBody) => {
        try {
            const { data } = await axios.post(
                "/api/user/playlists",
                { playlist: requestBody },
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            toast.success("New Playlist Has Created");
            return data;
        } catch (err) {
            toast.error("Faild to create Playlist")
        }
    }
);


export const deletePlayList = createAsyncThunk(

    "playlist/deletePlayList",
    async (id) => {
        try {
            const { data } = await axios.delete(
                `/api/user/playlists/${id}`,
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            toast.info("Playlist Successfully Deleted");
            return data;
        } catch (err) {

        }
    }
);


export const postVideo = createAsyncThunk(

    "playlist/postVideo",
    async ({ playlistId, video }) => {
        try {
            const { data } = await axios.post(
                `/api/user/playlists/${playlistId}`,
                { video: video },
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            toast.success("Successfully Added To Playlist");
            return data;
        } catch (err) {
            toast.error("Failed To Add In Playlist");
        }
    }
);



export const getPlaylists = createAsyncThunk(
    "playlist/getPlaylists",
    async () => {
        try {
            const { data } = await axios.get(
                "/api/user/playlists",
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            return data;
        } catch (err) {
            toast.error("Failed To Get In Playlist");
        }
    }
);


export const removePlaylistVideo = createAsyncThunk(

    "playlist/removePlaylistVideo",
    async ({ playlist, item }) => {
        try {
            const { data } = await axios.delete(
                `/api/user/playlists/${playlist._id}/${item._id}`,
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            toast.info("Successfully Removed")
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);


export const playlistSlice = createSlice({

    name: "playlist",
    initialState: {
        playlists: [],

    },

    reducers: {

    },

    extraReducers: {
        // for get to new playlist
        [postNewPlayList.pending]: (state) => {
        },

        [postNewPlayList.fulfilled]: (state, { payload }) => {
            state.playlists = payload.playlists;
        },

        [postNewPlayList.rejected]: (state) => {
        },


        // for to delete  playlist
        [deletePlayList.pending]: (state) => {
        },

        [deletePlayList.fulfilled]: (state, { payload }) => {
            state.playlists = payload.playlists;
        },

        [deletePlayList.rejected]: (state) => {
        },


        // for the adding video to playlist
        [getPlaylists.pending]: (state) => {
        },

        [getPlaylists.fulfilled]: (state, { payload }) => {
            state.playlists = payload.playlists;
        },

        [getPlaylists.rejected]: (state) => {
        },

    }
})

export const playlistReducer = playlistSlice.reducer;

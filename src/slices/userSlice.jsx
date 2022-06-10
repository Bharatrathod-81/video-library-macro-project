import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// this is for to get the watch later items
export const getWatchLater = createAsyncThunk(

    "userSlice/getWatchLater",

    async () => {
        try {
            const { data } = await axios.get(
                "/api/user/watchlater",
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            return data ;
        } catch (err) {
            
        };
    }
);

// this is for to post watch later items
export const postWatchLater = createAsyncThunk(

    "userSlice/postWatchLater",

    async ( video ) => {
        try {
            const { data } = await axios.post(
                "/api/user/watchlater",
                { video: video},
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            toast.success("Successfully Added to Watch Later");
        } catch (err) {
            toast.error("Failed To Add in Watch Later");
        };
    }
);

// this is for to delete the watch later items
export const  deleteWatchLater = createAsyncThunk(

    "userSlice/deleteWatchLater",

    async ( video ) => {
        try {
            const { data } = await axios.delete(
                `/api/user/watchlater/${video._id}`,
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            );
            toast.info("Successfully Removed from WatchLater");
            return data ;
        } catch (err) {

        };
    }
);


export const userSlice = createSlice({
    name : "userSlice",
    initialState: {
        loading : false,
        status: "idle",
        WatchLater: [],
    },

    reducers: {

    },

    extraReducers: {
        // for the watchLater
        [getWatchLater.pending]: (state) => {
            state.loading = true;
            state.status = "pending"
        },

        [getWatchLater.fulfilled]: (state, { payload }) => {
            state.loading = false ; 
            state.status = "fulfilled";
            state.WatchLater = payload.watchlater ;
        },
        
        [getWatchLater.rejected]: (state) => {
            state.loading = false ;
            state.status = "rejected" ;
        },


        // for remove from watchlater
        [deleteWatchLater.pending]: (state) => {
            state.loading = true;
            state.status = "pending"
        },

        [deleteWatchLater.fulfilled]: (state,{ payload }) => {
            state.loading = false ; 
            state.status = "fulfilled";
            state.WatchLater = payload.watchlater ;
        },

        [deleteWatchLater.rejected]: (state) => {
            state.loading = false ;
            state.status = "rejected" ;
        },
    }
})


export const userReducer = userSlice.reducer ; 
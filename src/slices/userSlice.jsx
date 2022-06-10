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

// for to add videos to history
export const postHistory = createAsyncThunk(

    "/userSlice/postHistory",

    async (video) => {
        try{
            const { data } = await axios.post(
                "/api/user/history",
                {video: video},
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            return data ;
        } catch (err) {
            console.log(err);
        }
    }
);


// for to getting videos from history
export const getHistory = createAsyncThunk(

    "/userSlice/getHistory",

    async () => {
        try{
            const { data } = await axios.get(
                "/api/user/history",
            
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            return data ;
        } catch (err) {
            console.log(err);
        }
    }
);


// for to remove videos from history
export const removeHistoryVideo = createAsyncThunk(

    "/userSlice/removeHistoryVideo",

    async (videoId) => {
        try{
            const { data } = await axios.delete(
                `/api/user/history/${videoId}`,
            
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            toast.info("Successfully Removed From History");
            return data ;
        } catch (err) {
            console.log(err);
        }
    }
);

// for to remove all videos from history
export const removeAllHistoryVideo = createAsyncThunk(

    "/userSlice/removeAllHistoryVideo",

    async () => {
        try{
            const { data } = await axios.delete(
                "/api/user/history/all",
            
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            toast.info("Successfully Removed From History");
            return data ;
        } catch (err) {
            console.log(err);
        }
    }
);


// for to add videos to likes
export const postLikes = createAsyncThunk(

    "/userSlice/postLikes",

    async (video) => {
        try{
            const { data } = await axios.post(
                "/api/user/likes",
                {video: video},
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            toast.success("Successfully Added To Likes")
            return data ;
        } catch (err) {
            console.log(err);
        }
    }
);


// for to get videos to likes
export const getLikes = createAsyncThunk(

    "/userSlice/getLikes",

    async () => {
        try{
            const { data } = await axios.get(
                "/api/user/likes",
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            return data ;
        } catch (err) {
            console.log(err);
        }
    }
);

// for to remove videos from likes
export const removeLikes = createAsyncThunk(

    "/userSlice/removeLikes",

    async (video) => {
        try{
            const { data } = await axios.delete(
                `/api/user/likes/${video._id}`,
                {
                    headers: { authorization: localStorage.getItem("token") },
                }
            )
            return data ;
        } catch (err) {
            console.log(err);
        }
    }
);


export const userSlice = createSlice({
    name : "userSlice",
    initialState: {
        loading : false,
        status: "idle",
        WatchLater: [],
        history: [],
        likes: [],
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


        // / for get videos from hisyory
        [getHistory.pending]: (state) => {
            state.loading = true;
            state.status = "pending"
        },

        [getHistory.fulfilled]: (state,{ payload }) => {
            state.loading = false ; 
            state.status = "fulfilled";
            state.history = payload.history ;
        },

        [getHistory.rejected]: (state) => {
            state.loading = false ;
            state.status = "rejected" ;
        },


        // / for remove videos from hisyory
        [removeHistoryVideo.pending]: (state) => {
        },

        [removeHistoryVideo.fulfilled]: (state,{ payload }) => {
            state.history = payload.history ;
        },

        [removeHistoryVideo.rejected]: (state) => {
        },

        // / for remove all videos from hisyory
        [removeAllHistoryVideo.pending]: (state) => {
        },

        [removeAllHistoryVideo.fulfilled]: (state,{ payload }) => {
            state.history = payload.history ;
        },

        [removeAllHistoryVideo.rejected]: (state) => {
        },


        // / for add videos to likes
        [getLikes.pending]: (state) => {
        },

        [getLikes.fulfilled]: (state,{ payload }) => {
            state.likes = payload.likes ;
        },

        [getLikes.rejected]: (state) => {
        },
    }
})


export const userReducer = userSlice.reducer ; 
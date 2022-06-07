import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



// for the login
export const postLogin = createAsyncThunk(

    "loginSingup/postLogin",
    async ({ email, password }) => {
        try {
            const { data, status } = await axios.post("/api/auth/login", { email, password });

            localStorage.setItem("token", data.encodedToken);
            localStorage.setItem("user", data.foundUser.firstName);

            if (status === 200) {
                toast.success(`Welcome Back ${data.foundUser.firstName}`)
            }
            return data;
        } catch (err) {

        }
    }
);



// for the signup
export const postSignup = createAsyncThunk(

    "loginSingup/postSignup",
    async ({ firstname, lastname, email, password }) => {
        
        try {
            const { data, status } = await axios.post(`/api/auth/signup`, {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password
            });
            if (status === 201) {
                toast.success(`Welcome ${data.createdUser.firstName}`)
            };
    
            return data;

        } catch (err) {

        }
    }
);



export const authSlice = createSlice({

    name: "loginSingup",

    initialState: {
        token: localStorage.getItem("token") || null,
        user: localStorage.getItem("user") || null,
        status: "idle",
        isLogin: false,
        isSignup: false,
    },


    reducers: {

        logOutHandler: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            state.user = null;
            state.token = null;
            toast.info("Successfully Logout")
        }
    },


    extraReducers: {

        // for the login
        [postLogin.pending]: (state) => {
            state.status = "pending";
        },

        [postLogin.fulfilled]: (state, { payload }) => {
            state.status = "fulfilled";
            state.isLogin = true;

            state.token = payload.encodedToken;
            state.user = payload.foundUser.firstName;

        },
        [postLogin.rejected]: (state) => {
            state.status = "rejected";
            toast.error("Invalid Username or Password");
        },



        // for the signup
        [postSignup.pending]: (state) => {
            state.status = "pending";
        },

        [postSignup.fulfilled]: (state, { payload }) => {
            state.status = "fulfilled";
            state.token = payload.encodedToken;
            state.user = payload.createdUser.firstName;

        },

        [postSignup.rejected]: (state) => {
            state.status = "rejected";
            toast.error("Invalid Email or Password");
        }
    }
})

export const { logOutHandler } = authSlice.actions;

export const authReducer = authSlice.reducer;
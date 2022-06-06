import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    auth : {
        token : localStorage.getItem("token") || "",
        user : localStorage.getItem("user") || "",
    },
    status: "idle",
};

// for the login
export const getLogin = createAsyncThunk(
    "loginSingup/getLogin",
    async ( {email, password} ) => {
        const res = await axios.post("/api/auth/login", { email,password })
        return res ;  
    }
);
// for the signup
export const getSignUp = createAsyncThunk(
    "loginSingup/getSignUp",
    async ({firstname, lastname, email, password}) => {
        const res = await axios.post(`/api/auth/signup`,{
            firstName : firstname,
            lastName : lastname,
            email : email,
            password : password
        })
        return res 
    }
)

export const authSlice = createSlice({
    name:"loginSingup",
    initialState,
    reducers:{},
    extraReducers:{
        // for the login
        [getLogin.pending] : (state) => {
            state.status = "pending";
        },

        [getLogin.fulfilled] : (state,{ payload }) => {
            state.status = "fulfilled";
            
            localStorage.setItem("token",payload.data.encodedToken);
            localStorage.setItem("user",payload.data.foundUser.firstName);

            if (payload.status === 200) {
                toast.success(`Welcome Back ${payload.data.foundUser.firstName}`)
            }
        },
        [getLogin.rejected] : (state) => {
            state.status = "rejected";
            toast.error("Invalid Username or Password");
        },
        
        // for the signup
        [getSignUp.pending] : (state) => {
            state.status = "pending";
        },

        [getSignUp.fulfilled] : (state, { payload }) => {

            if (payload.status === 201) {
                toast.success(`Welcome ${payload.data.createdUser.firstName}`)
            }
            state.status = "fulfilled";

            localStorage.setItem("token",payload.data.encodedToken);
            localStorage.setItem("user",payload.data.createdUser.firstName);

        },

        [getSignUp.rejected] : (state) => {
            state.status = "rejected";
            toast.error("Invalid Email or Password");
        }
    }
})

export const authReducer = authSlice.reducer;
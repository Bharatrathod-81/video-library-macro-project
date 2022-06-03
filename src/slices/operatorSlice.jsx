import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle : false
};



export const operatorSlice = createSlice({
    name:"videos",
    initialState,
    reducers:{
        toggler: (state) => {
            state.toggle = !state.toggle;
        }
    }
})

export const {toggler} = operatorSlice.actions

export const operatorReducer = operatorSlice.reducer
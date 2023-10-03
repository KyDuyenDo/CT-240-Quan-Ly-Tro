import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
    name: "notify",
    initialState:{
        success: null,
        message:"",
        show: false
    },
    reducers:{
        initNotify:(state) => {
            state.success = null
            state.message = ""
            state.show = false
        },
        successfully: (state, action) => {
            state.show = true
            state.success = true
            state.message = action.payload.message
        },
        unsuccessful: (state, action) => {
            state.show = true
            state.success = false
            state.message = action.payload.message
        },
    }
})

export const { initNotify, successfully, unsuccessful} = notifySlice.actions;
export default notifySlice.reducer;
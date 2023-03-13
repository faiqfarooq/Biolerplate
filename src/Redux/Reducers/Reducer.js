import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:'user',
    initialState:{counter:5},
    reducers:{
        increment(state){
            state.counter++;
        }
    }
})

export const userActions=counterSlice.actions;
export default counterSlice;
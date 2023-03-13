import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/reducers/Reducer";


const store=configureStore({
    reducer:{user: counterSlice.reducer }
});

export default store;
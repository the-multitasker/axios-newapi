import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer/root.reducer";


const store = configureStore({
    reducer:rootReducer,
    // middleware:[],
    devTools:process.env.NODE_ENV !== 'production' ? true : false
})

export default store;
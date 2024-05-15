import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product.reducer";
import { cartReducer } from "./cart.reducer";

export const rootReducer = combineReducers({
    product:productReducer,
    cartProduct:cartReducer
})
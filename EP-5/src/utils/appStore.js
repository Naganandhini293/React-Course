import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const AppStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default AppStore;

// add item -> dispatch actions -> call reducer function (to uodate the cart state) -> Modify the cart slice data
//get item data -> selector (subscribe to the cart)

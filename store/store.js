// This file is used to create the store for the application
"use-client";
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../pages/feature/cake/cakeSlice";
import icecreamReducer from "../pages/feature/icecream/icecreamSlice";
import userReducer from "../pages/feature/user/userSlice";
// import logger from "redux-logger";

const Store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;

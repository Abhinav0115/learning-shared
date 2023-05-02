import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feature/cake/cakeSlice";
import icecreamReducer from "../feature/icecream/icecreamSlice";
import userReducer from "../feature/user/userSlice";
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

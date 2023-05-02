import { configureStore } from "@reduxjs/toolkit";

// import { bonusReducer } from "../feature/reducer/bonus";
// import { accountReducer } from "../feature/reducer/account";

//
import bonusSlice from "../feature/reducer/bonusSlice";
import accountSlice from "../feature/reducer/accountSlice";
import userSlice from "../feature/reducer/userSlice";
//

import logger from "redux-logger";
import thunk from "redux-thunk";

// Store is a Redux store that lets you read the state, dispatch actions and subscribe to changes.
export const Store = configureStore({
    // account and bonus are reducers
    reducer: {
        account: accountSlice,
        bonus: bonusSlice,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([logger, thunk]), // logger and thunk are middleware
});

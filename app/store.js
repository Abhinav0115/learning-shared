const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");

const icecreamReducer = require("../feature/icecream/icecreamSlice");
const cakeReducer = require("../feature/cake/cakeSlice");
const userReducer = require("../feature/user/userSlice");

const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;

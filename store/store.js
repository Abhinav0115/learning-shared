const configureStore = require("@reduxjs/toolkit").configureStore;

const counterReducer = require("../feature/counterSlice");

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

module.exports = store;

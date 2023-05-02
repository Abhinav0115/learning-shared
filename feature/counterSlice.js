const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    counterValue: 0,
};

//initial state
//action
//action creater
//store
//reducer
//dispatch

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counterValue += action.payload;
        },
        decrement: (state) => {
            state.counterValue--;
        },
    },
});

module.exports = CounterSlice.reducer;
module.exports.counterActions = CounterSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

const initialState = {
    amount: 1,
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        inc: (state) => {
            state.amount += 1;
        },
        dec: (state) => {
            state.amount -= 1;
        },
        incByAmt: (state, action) => {
            state.amount += action.payload;
        },
        decByAmt: (state, action) => {
            state.amount -= action.payload;
        },
    },
});

export default accountSlice.reducer;
export const { inc, dec, incByAmt, decByAmt } = accountSlice.actions;

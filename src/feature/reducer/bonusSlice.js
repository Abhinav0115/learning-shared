import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 0,
};

const bonusSlice = createSlice({
    name: "bonus",
    initialState,
    reducers: {
        incBonus: (state) => {
            state.points += 1;
        },
        decBonus: (state) => {
            state.points -= 1;
        },
        incByAmt: (state, action) => {
            state.points += action.payload;
        },
        decByAmt: (state, action) => {
            state.points -= action.payload;
        },
    },
});

export default bonusSlice.reducer;
export const { incBonus, decBonus, incByAmt, decByAmt } = bonusSlice.actions;

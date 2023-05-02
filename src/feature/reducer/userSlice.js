import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false,
    error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.data.map((user) => (
            <div key={user.id}>
                {user.id} - {user.name}
            </div>
        ))
    );
});

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        removeUser: (state, action) => {
            state.users = [];
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer;
export const { removeUser } = userSlice.actions;

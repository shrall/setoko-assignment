import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        searchQuery: ""
    },
    reducers: {
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const { updateSearchQuery } = userSlice.actions;

export default userSlice.reducer;

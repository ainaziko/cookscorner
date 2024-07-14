import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
    name: 'visibility',
    initialState: true,
    reducers: {
        toggleVisibility(state, action) {
            return !state;
        }
    }
})

export const { toggleVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;

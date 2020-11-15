import { createSlice } from "@reduxjs/toolkit";

export const configurationSlice = createSlice({
    name: "configuration",
    initialState: {},
    reducers: {
        updateConfiguration: (state: any, action) => {
            Object.assign(state.configuration, action.payload);
        }
    }
});

export const { updateConfiguration } = configurationSlice.actions;
export default configurationSlice.reducer;
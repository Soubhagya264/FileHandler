import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    file: null
}

export const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        setFile: (state, action) => {
            state.file = action.payload;
        }

    }

})

export const { setFile } = fileSlice.actions;
export default fileSlice.reducers;
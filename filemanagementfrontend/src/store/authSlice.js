import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isAuth: false,
    user: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        setAuth: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            if (state.user == null) {
                state.isAuth = false;
            }
            state.isAuth = true;
        }

    }

})

export const {setAuth}=authSlice.actions
export default authSlice.reducers;
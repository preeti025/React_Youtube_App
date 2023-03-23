import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        userIsLoggedIn: (state) =>{
            state.isLogin = true;
        }
    }
});

export default authSlice.reducer;
export const {userIsLoggedIn} = authSlice.actions;
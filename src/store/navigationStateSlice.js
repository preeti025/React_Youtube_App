import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navigationMenu: false,
}

const navigationStateSlice = createSlice({
    name: 'toggleNavigation',
    initialState,
    reducers:{
        toggleNavigation: (state) =>{
            state.navigationMenu = !state.navigationMenu
        },
        videoPageNavigation: (state) =>{
            state.navigationMenu = false
        }
    }
});

export default navigationStateSlice.reducer;
export const {toggleNavigation, videoPageNavigation} = navigationStateSlice.actions;
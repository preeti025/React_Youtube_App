import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import toggleNavigationSlice from "./navigationStateSlice";
import videoInfoSlice from "./videoInfoSlice";

const store = configureStore({
    reducer:{
        toggleNavigation: toggleNavigationSlice,
        auth: authSlice,
        videoInfo: videoInfoSlice
    }
})

export default store;
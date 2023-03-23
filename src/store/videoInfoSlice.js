import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GOOGLE_API_KEY } from "../constant";

const initialState = {
    videoInfo: '',
    channelId: '',
    channelThumbnail: '',
    subscribers: ''
}

export const fetchVideoInfo = createAsyncThunk(
    'VideoInformation',
    async (videoId) =>{
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`
          );
          const data = await response.json();
          return data?.items[0];
    }
)

export const fetchChannelThumbnail = createAsyncThunk(
    'ChannelThumbnail',
    async(channelId) =>{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelId}&key=${GOOGLE_API_KEY}`);
        const data = await response.json();
        return data?.items[0]?.snippet?.thumbnails;
    }
)

export const fetchChannelSubscribers = createAsyncThunk(
    'ChannelSubscribers',
    async(channelId) =>{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${GOOGLE_API_KEY}`);
        const data = await response.json();
        console.log(data)
        return data?.items[0]?.statistics?.subscriberCount;
    }
)
const videoInfoSlice = createSlice({
    name: 'videoInfo',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [fetchVideoInfo.fulfilled] : (state, action) => {
            state.videoInfo = action.payload
        },
        [fetchChannelThumbnail.fulfilled]: (state, action) =>{
            state.channelThumbnail = action.payload
        },
        [fetchChannelSubscribers.fulfilled]: (state, action) =>{
            console.log(action.payload)
            state.subscribers = action.payload
        },
    }
})

export const {getVideoInfo} = videoInfoSlice.actions;
export default videoInfoSlice.reducer;
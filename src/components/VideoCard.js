import React from "react";
import { useSelector } from "react-redux";
import { getCount } from "../utils/getCount";

const VideoCard = ({ youtubeVideo }) => {
  const navigationCtx = useSelector(
    (state) => state.toggleNavigation.navigationMenu
  );
  const viewCount = getCount(youtubeVideo?.statistics?.viewCount);
  return (
    <>
      {navigationCtx && (
        <div className="video-card rounded-lg mx-2 mb-6 w-[250px] cursor-pointer">
          <div className="video-image rounded-xl">
            <img
              className="rounded-xl bg-gray-300"
              src={youtubeVideo?.snippet?.thumbnails?.medium?.url}
            ></img>
          </div>
          <div className="video-details p-2">
            <div className="video-title text-medium m-1 font-medium">
              {youtubeVideo?.snippet?.localized?.title.slice(0, 53)}...
            </div>
            <div className="video-channelTitle text-xs text-gray-500 m-1">
              {youtubeVideo?.snippet?.channelTitle}
            </div>
            <div className="video-views text-xs text-gray-500 m-1">
              {viewCount} views
            </div>
          </div>
        </div>
      )}
      {!navigationCtx && (
        <div className="video-card rounded-lg mx-2 mb-6 w-60 sm:w-64 md:w-72 cursor-pointer">
          <div className="video-image rounded-xl">
            <img
              className="rounded-xl"
              src={youtubeVideo?.snippet?.thumbnails?.medium?.url}
            ></img>
          </div>
          <div className="video-details p-2">
            <div className="video-title text-xs lg:text-base m-1 font-medium">
              {youtubeVideo?.snippet?.localized?.title.slice(0, 53)}...
            </div>
            <div className="video-channelTitle text-xs text-gray-500 m-1">
              {youtubeVideo?.snippet?.channelTitle}
            </div>
            <div className="video-views text-xs text-gray-500 m-1">
              {viewCount} views
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;

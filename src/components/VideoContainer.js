import React from "react";
import FilterList from "./FilterList";
import VideoList from "./VideoList";

const VideoContainer = () => {
  return (
    <div className="video-container flex flex-col bg-white ml-5">
      <div className="filter-list-container flex bg-white sticky top-14 pb-3">
        <FilterList />
      </div>
      <div className="video-list-contianer my-4">
        <VideoList />
      </div>
    </div>
  );
};

export default VideoContainer;

import React from "react";
import { Link } from "react-router-dom";

const RelatedVideoListCard = ({ youtubeVideo }) => {
  return (
    <Link to={`/watch?v=${youtubeVideo.id}`}>
      <div className="relatedVidoes-card rounded-md mb-3 w-full hover:shadow-lg cursor-pointer flex ">
        <div className="relatedVideo-image rounded-md w-1/2">
          <img
            className="rounded-md w-60"
            src={youtubeVideo?.snippet?.thumbnails?.medium?.url}
          ></img>
        </div>
        <div className="relatedVideo-title mx-2 w-1/2">
          <div className="title text-medium m-0 font-medium">
            {youtubeVideo?.snippet?.localized?.title.slice(0, 53)}...
          </div>
          <div className="realtedVideo-channelTitle text-xs text-gray-500 m-1">
            {youtubeVideo?.snippet?.channelTitle}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelatedVideoListCard;

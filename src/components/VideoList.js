import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../constant";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchYoutubeVideos();
  }, []);

  async function fetchYoutubeVideos() {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    console.log(data?.items);
    setYoutubeVideos(data?.items);
    setIsLoading(false);
  }
  return (
    <>
      {isLoading && <Shimmer />}
      {!isLoading && (
        <div className="video-list flex flex-wrap justify-center">
          {youtubeVideos.map((youtubeVideo) => {
            return (
              <Link to= {`/watch?v=${youtubeVideo.id}`}  key={youtubeVideo?.id}>
                <VideoCard youtubeVideo={youtubeVideo} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default VideoList;

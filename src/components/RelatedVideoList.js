import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../constant";
import RelatedVideoListCard from "./RelatedVideoListCard";

const RelatedVideoList = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    fetchYoutubeVideos();
  }, []);

  async function fetchYoutubeVideos() {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    console.log(data?.items);
    setYoutubeVideos(data?.items);
  }
  return (
    
      <div className="related-video-list flex flex-wrap">
        {youtubeVideos.map((youtubeVideo) => {
          return <RelatedVideoListCard youtubeVideo={youtubeVideo} key = {youtubeVideo.id}/>;
        })}
      </div>
  );
};

export default RelatedVideoList;

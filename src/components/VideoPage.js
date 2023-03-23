import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { videoPageNavigation } from "../store/navigationStateSlice";
import RelatedVideoList from "./RelatedVideoList";
import VideoInfo from "./VideoInfo";
import { fetchVideoInfo } from "../store/videoInfoSlice";

const VideoPage = () => {
  let [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const info = useSelector(state => state.videoInfo.videoInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(videoPageNavigation());
  });

  useEffect(() => {
    getVideoInfo();
  }, [videoId]);

  const getVideoInfo = () => {
    dispatch(fetchVideoInfo(videoId));
     };

  if(!info) return;

  return (  
    <>
      <div className="video-page-container py-7 ml-9 flex">
        <div className="video-container flex flex-col w-[50rem]">
          <div className="video w-[50rem] bg-black h-[30rem]">
            <iframe
              className="w-[50rem] h-[30rem]"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div></div>
          </div>
          <div className="video-info-container">
            <VideoInfo info = {info}/>
          </div>
        </div>
        <div className="related-vide-container mx-6 w-[28rem]">
          <RelatedVideoList />
        </div>
      </div>
    </>
  );
};

export default VideoPage;

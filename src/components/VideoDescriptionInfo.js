import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../constant";
import { getCount } from "../utils/getCount";
import likeIcon from "../assets/like.png";
import disLikeIcon from "../assets/disLike.png";
import shareIcon from "../assets/share.png";
import downloadIcon from "../assets/download.png";
import threeDots from "../assets/threeDots.png";
import { useDispatch, useSelector } from "react-redux";
import {fetchChannelSubscribers,fetchChannelThumbnail} from "../store/videoInfoSlice";

const VideoDescriptionInfo = ({ info }) => {
  const [isShowDescription, setIsShowDescription] = useState(false);
  const dispatch = useDispatch();

  console.log(info);
  const channelThumbnail = useSelector(
    (state) => state.videoInfo.channelThumbnail
  );
  const subscribers = useSelector((state) => state.videoInfo.subscribers);

  const { title, channelTitle, channelId, description, publishedAt } =
    info.snippet;
  const { viewCount, likeCount, commentCount } = info.statistics;

  useEffect(() => {
    getChannelThumbnail();
    getSubscribers();
  }, [channelId]);

  const getChannelThumbnail = () => {
    dispatch(fetchChannelThumbnail(channelId));
  };
  const getSubscribers = async () => {
    dispatch(fetchChannelSubscribers(channelId));
  };

  const subscriberCount = getCount(subscribers);
  const totalLikeCount = getCount(likeCount);
  const date = new Date(publishedAt);
  console.log(date);

  const descriptionHandler = () => {
    setIsShowDescription(false);
    document.documentElement.scrollTop = 0;
  };

  if (!channelThumbnail) return;
  return (
    <>
      <div className="video-title text-xl font-medium pr-3">{title}</div>
      <div className="video-info flex h-14 py-2 mt-2 justify-between">
        <div className="channel-thumbnail flex">
          <img
            className="rounded-full h-10"
            src={channelThumbnail.default.url}
          ></img>
          <div className="channel-info">
            <div className="channel-title ml-3 text-base cursor-pointer font-medium">{channelTitle}</div>
            <div className="channel-subscribers ml-3 text-xs ">{subscriberCount} subscribers</div>
          </div>
        </div>
        <button className="subscribe-button px-4 ml-2 bg-black text-white font-medium rounded-full hover:bg-gray-900">
          Subscribe
        </button>
        <div className="video-info flex">
          <div className="likeIcon-box flex items-center cursor-pointer">
            <div className="like-icon px-4 flex ml-12 bg-gray-200 hover:bg-slate-300 font-medium rounded-l-full items-center">
              <img className="h-10 p-1 mr-1" src={likeIcon} />
              <span className="video-like"> {totalLikeCount}</span>
            </div>
            <div className="dislike-icon flex pr-3 pl-1  cursor-pointer border-l border-gray-300 bg-gray-200 hover:bg-slate-300 font-medium rounded-r-full items-center">
              <img className="h-10 p-1 mr-1" src={disLikeIcon} />
            </div>
          </div>
          <div className="shareIcon-box flex items-center cursor-pointer">
            <div className="share-icon px-4 flex ml-2 bg-gray-200 hover:bg-slate-300 font-medium rounded-full items-center">
              <img className="h-10 py-2 mr-2" src={shareIcon} />
              <span> Share</span>
            </div>
          </div>
          <div className="threeDots-icon flex items-center cursor-pointer">
            <div className="threeDots-icon px-[10px] flex ml-2 bg-gray-200 hover:bg-slate-300 font-medium rounded-full items-center">
              <img className="h-10 py-2" src={threeDots} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`video-description my-3 bg-gray-200 rounded-xl p-3 ${
          !isShowDescription && "hover:bg-slate-300 cursor-pointer"
        }`}
      >
        <div className="video-basic-info flex">
          <div className="views-count text-md font-medium pr-2">
            {Number(parseFloat(viewCount).toFixed(2)).toLocaleString("en")}views</div>
          <div className="video-publishDate text-md font-medium">
            {date.toLocaleString("en-US", { month: "short" })} {date.getDate()},{" "}
            {date.getFullYear()}
          </div>
        </div>
        {isShowDescription && (
          <div className="video-description whitespace-pre-wrap text-sm pr-4">{description}</div>
        )}
        {!isShowDescription && (
          <button
            className="showMore-btn mt-6 font-medium"
            onClick={() => {
              setIsShowDescription(true);
            }}
          >Show more</button>
        )}
        {isShowDescription && (
          <button className="showLess-btn mt-6 font-medium" onClick={descriptionHandler}>
            Show less
          </button>
        )}
      </div>
    </>
  );
};

export default VideoDescriptionInfo;

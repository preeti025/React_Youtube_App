import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../constant";
import { fetchChannelThumbnail } from "../store/videoInfoSlice";
import Navigation from "./Navigation";

const SearchVideoListing = () => {
  let [searchParams] = useSearchParams();
  const searchText = searchParams.get("search_query");
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();
  const channelThumbnail = useSelector(
    (state) => state.videoInfo.channelThumbnail
  );

  useEffect(() => {
    fetchSearchData();
  }, []);

  const fetchSearchData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchText}&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    setSearchData(data?.items);
    console.log(data?.items);
  };

  useEffect(() => {
    getChannelThumbnail();
  }, [searchData[0]?.snippet?.channelId]);

  const getChannelThumbnail = () => {
    dispatch(fetchChannelThumbnail(searchData[0]?.snippet?.channelId));
  };

  console.log(channelThumbnail);
  return (
    <>
      <Navigation />
      <div className="w-4/5 mt-12 m-auto border-y">
        <div className="flex justify-between items-center py-7">
          <div className="w-1/3 items-center ">
            <img
              className="rounded-full w-32 m-auto text-lg"
              src={channelThumbnail?.default?.url}
            />
          </div>
          <div className="">
            <p className="font-semibold">{searchData[0]?.snippet?.title}</p>
            <p className="py-3 text-sm">
              {searchData[0]?.snippet?.description}
            </p>
          </div>
          <button className=" p-2 px-4 text-white rounded-full bg-black">
            Subscribe
          </button>
        </div>
      </div>
      <div className="my-4 m-auto font-semibold w-4/5">
        <p>Latest From {searchData[0]?.snippet?.title}</p>

        <div className="flex justify-between py-7">
          <div className="w-1/3 items-center ">
            <img
              className="m-auto w-full text-lg rounded-2xl"
              src={searchData[3]?.snippet?.thumbnails?.medium?.url}
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">{searchData[3]?.snippet?.title}</p>
            <p className="py-3 text-sm">
              {searchData[3]?.snippet?.description}
            </p>
          </div>
        </div><div className="flex justify-between py-7">
          <div className="w-1/3 items-center ">
            <img
              className="m-auto w-full text-lg rounded-2xl"
              src={searchData[4]?.snippet?.thumbnails?.medium?.url}
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">{searchData[4]?.snippet?.title}</p>
            <p className="py-3 text-sm">
              {searchData[4]?.snippet?.description}
            </p>
          </div>
        </div><div className="flex justify-between py-7">
          <div className="w-1/3 items-center ">
            <img
              className="m-auto w-full text-lg rounded-2xl"
              src={searchData[5]?.snippet?.thumbnails?.medium?.url}
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">{searchData[5]?.snippet?.title}</p>
            <p className="py-3 text-sm">
              {searchData[5]?.snippet?.description}
            </p>
          </div>
        </div><div className="flex justify-between py-7">
          <div className="w-1/3 items-center ">
            <img
              className="m-auto w-full text-lg rounded-2xl"
              src={searchData[6]?.snippet?.thumbnails?.medium?.url}
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">{searchData[6]?.snippet?.title}</p>
            <p className="py-3 text-sm">
              {searchData[6]?.snippet?.description}
            </p>
          </div>
        </div><div className="flex justify-between py-7">
          <div className="w-1/3 items-center ">
            <img
              className="m-auto w-full text-lg rounded-2xl"
              src={searchData[7]?.snippet?.thumbnails?.medium?.url}
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">{searchData[7]?.snippet?.title}</p>
            <p className="py-3 text-sm">
              {searchData[7]?.snippet?.description}
            </p>
          </div>
        </div><div className="flex justify-between py-7">
          <div className="w-1/3 items-center ">
            <img
              className="m-auto w-full text-lg rounded-2xl"
              src={searchData[8]?.snippet?.thumbnails?.medium?.url}
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">{searchData[8]?.snippet?.title}</p>
            <p className="py-3 text-sm">
              {searchData[8]?.snippet?.description}
            </p>
          </div>
        </div><div className="flex justify-between py-7">
          <div className="w-1/3 items-center ">
            <img
              className="m-auto w-full text-lg rounded-2xl"
              src={searchData[9]?.snippet?.thumbnails?.medium?.url}
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">{searchData[9]?.snippet?.title}</p>
            <p className="py-3 text-sm">
              {searchData[9]?.snippet?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchVideoListing;

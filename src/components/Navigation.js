import React from "react";
import { useSelector } from "react-redux";
import libraryIcon from "../assets/libraryIcon.png";
import homeIcon from "../assets/homeIcon.png";
import shortIcon from "../assets/shortIcon.png";
import subscriptionIcon from "../assets/subscriptionIcon.png";
import watchLaterIcon from "../assets/watchLaterIcon.png";
import historyIcon from "../assets/historyIcon.png";
import likeIcon from "../assets/likeIcon.png";
import trending from "../assets/trending.png";
import shopping from "../assets/shopping.png";
import music from "../assets/music.png";
import movies from "../assets/movies.png";
import gaming from "../assets/gaming.png";
import news from "../assets/news.png";
import sport from "../assets/sport.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navigationCtx = useSelector(
    (state) => state.toggleNavigation.navigationMenu
  );  

  return (
    <>
      {navigationCtx && (
        <div className="nav-box pl-5 pr-6 w-60 fixed bg-white h-full z-50 overflow-hidden">
          <Link to = '/' className="nav-list flex py-2 pr-24 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <div className="mr-6 pl-4 w-10">
              <img className="h-5" src={homeIcon} alt="homepage" />
            </div>
            <div className="text-sm font-normal">Home</div>
          </Link>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={shortIcon} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Shorts</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={subscriptionIcon} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Subscriptions</li>
          </ul>
          <hr className="my-3"></hr>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={libraryIcon} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Library</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={historyIcon} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">History</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={watchLaterIcon} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Watch later</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={likeIcon} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Liked videos</li>
          </ul>
          <hr className="my-3"></hr>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={trending} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Trending</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={shopping} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Shopping</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={music} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Music</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={movies} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Movies</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={gaming} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Gaming</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={news} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">News</li>
          </ul>
          <ul className=" nav-list flex py-2 hover:bg-gray-200 rounded-lg">
            <li className="nav-item mr-6 pl-4 w-10">
              <img className="h-5" src={sport} alt="homepage" />
            </li>
            <li className="nav-item text-sm font-normal">Sports</li>
          </ul>
        </div>
      )}
      {!navigationCtx && (
        <div className="nav-box w-18 ml-1 fixed text-sm">
          <ul className="nav-list py-4 hover:bg-gray-200 w-full rounded-lg flex flex-col justify-center items-center">
            <li className="nav-item">
              <img className="w-5 lg:w-6" src={homeIcon} alt="homepage" />
            </li>
            <li className="nav-item text-[9px] lg:text-xs font-normal py-1">Home</li>
          </ul>
          <ul className="nav-list py-4 hover:bg-gray-200 w-full rounded-lg flex flex-col justify-center items-center">
           <li className="nav-item">
              <img className="w-4 lg:w-5" src={shortIcon} alt="homepage" />
            </li>
            <li className="nav-item text-[9px] lg:text-xs font-normal py-1">Shorts</li>
          </ul>
          <ul className="nav-list py-4 hover:bg-gray-200 w-full rounded-lg flex flex-col justify-center items-center">
           <li className="nav-item">
              <img className="w-5 lg:w-6" src={subscriptionIcon} alt="homepage" />
            </li>
            <li className="nav-item text-[9px] lg:text-xs font-normal py-1">Subscriptions</li>
          </ul>
          <ul className="nav-list py-4 hover:bg-gray-200 w-full rounded-lg flex flex-col justify-center items-center">
           <li className="nav-item">
              <img className="w-5 lg:w-6" src={libraryIcon} alt="homepage" />
            </li>
            <li className="nav-item text-[9px] lg:text-xs font-normal py-1">Library</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;

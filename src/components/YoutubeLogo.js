import React from "react";
import hamburgerMenu from '../assets/hamburgerMenu.png';
import youtubeIcon from '../assets/youtubeIcon.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavigation } from "../store/navigationStateSlice";

const YoutubeLogo = () => {

    const dispatch = useDispatch();
    const toggleHandler = () => {
      dispatch(toggleNavigation());
    };
  return (
      <div className="youtube flex justify-center items-center">
        <div className="md:w-11 ml-2" onClick={toggleHandler}>
          <img
            className="humburger-menu p-1.5 w-9 md:w-10 ml-2 hover:bg-gray-200 rounded-full cursor-pointer"
            src={hamburgerMenu}
           alt="hamburger-icon"
          />
        </div>
        <Link to="/" className="youtube-logo">
          <img
            className="w-16 md:w-24 ml-4 cursor-pointer"
            src={youtubeIcon}
            alt="youtube-icon"
          />  
        </Link>
      </div>
  );
};

export default YoutubeLogo;

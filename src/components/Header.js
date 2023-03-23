import React from "react";
import Search from "./Search";
import hamburgerMenu from "../assets/hamburgerMenu.png";
import youtubeIcon from "../assets/youtubeIcon.png";
import notification from "../assets/notification.png";
import userIcon from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { userIsLoggedIn } from "../store/authSlice";
import userIcon1 from "../assets/userIcon.png";
import { Link } from "react-router-dom";
import YoutubeLogo from "./YoutubeLogo";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isLogin);

  const loginStateHandler = () => {
    dispatch(userIsLoggedIn());
  };

  return (
    <div className="header-navigation sticky flex justify-between py-2 top-0 bg-white h-14">
      <YoutubeLogo />
      <div className="main-search h-8 flex flex-col w-3/5 ml-24 md:h-10">
        <Search />
      </div>
      {auth && (
        <div className="sign-in flex justify-center items-center mr-7 py-2">
          <div className="mx-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <img
              className=" notification-icon w-10  m-auto"
              src={notification}
              alt="notification"
            />
          </div>
          <div className="mr-3 notification-icon hover:bg-gray-200 rounded-full cursor-pointer">
            <img
              className=" w-10 m-auto"
              src={notification}
              alt="notification"
            />
          </div>
          <img className="user-icon w-6 mr-3 md:w-8" src={userIcon} alt="user-icon" />
        </div>
      )}
      {!auth && (
        <div
          className="sign-in border flex mr-7 px-2 h-8 w-28 md:h-10 items-center rounded-full text-blue-600 font-medium hover:bg-blue-100"
          onClick={loginStateHandler}
        >
          <img className="user-icon1 w-7 md:h-7" src={userIcon1} />
          <span className="pb-1 pl-1 md:pl-2 text-xs md:text-sm">Sign In</span>
        </div>
      )}
    </div>
  );
};

export default Header;

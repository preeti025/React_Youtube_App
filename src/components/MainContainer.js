import React from "react";
import VideoContainer from "./VideoContainer";
import Navigation from './Navigation';
import { useSelector } from "react-redux";

const MainContainer = () => {
  const navigationCtx = useSelector(state => state.toggleNavigation.navigationMenu);
  console.log(navigationCtx);

  return (
    <div className="main-container flex bg-white">
      <div className="navigation py-2">
        {/* <Navigation /> */}
      </div>
      <div className={`main-video-container py-3 bg-white ${navigationCtx?'ml-60': 'ml-14'}`}>
        {/* <VideoContainer /> */}
      </div>
    </div>
  );
};

export default MainContainer;

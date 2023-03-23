
import { useSelector } from 'react-redux';
import VideoDescriptionInfo from './VideoDescriptionInfo';


const VideoInfo = () => {
  const info = useSelector(state =>state.videoInfo.videoInfo);
  
  if(!info) return;

  return (
    <div className=" video-info my-4 ">
      <VideoDescriptionInfo info = {info}/>
    </div>
  );
};

export default VideoInfo;

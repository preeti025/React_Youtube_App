export const GOOGLE_API_KEY = "AIzaSyB2XJIpw17INM-kF0fZwbzh0XVAvIjSX44";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${GOOGLE_API_KEY}
`;

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q='
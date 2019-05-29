import axios from "axios";

const KEY = "AIzaSyCm-GiCP5J5AOUeYQS0nDyhaN_1mxb9W38";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

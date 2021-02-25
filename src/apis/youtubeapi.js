import axios from "axios";
const KEY = "AIzaSyBAhq5zlmrw3SoceHpks5DIQWwHCJ0SAU0";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 10,
    key: KEY,
  },
});

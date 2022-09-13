
import data from "../data.json";

export function getVideos(videos) {
    return {
      type: "GET_VIDEOS",
      payload: {
        videos,
      },
    };
  }
  export function searchForKeyword(keyword) {
    return {
      type: "SEARCH_KEYWORD",
      payload: keyword,
    };
  }
  export function fetchVideos() {

    return (dispatch) => {
      dispatch(getVideos(data));
    

    };
  }
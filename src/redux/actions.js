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
  const updatedData = data.map((item) => {
    item.videoThumbnail = "./assets/videos/" + item.videoThumbnail;
    item.channelThumbnail = "./assets/channels/" + item.channelThumbnail;
    return item;
  });

  return (dispatch) => {
    dispatch(getVideos(updatedData));
  };
}

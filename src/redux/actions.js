


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
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => dispatch(getVideos(data)));
    };
  }
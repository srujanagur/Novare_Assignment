const initialState = {
    keyword: "",
    videos: [],
    searchForKeyword: [],
  };
  export default function playlistReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_VIDEOS": {
        return {
          ...state,
          videos: action.payload.videos,
          // searchForKeyword: action.payload.videos,
        };
      }
      case "SEARCH_KEYWORD": {
        const keyword = action.payload;
        let filteredData = state.videos.filter((video) => {
          return (
            video.name.common.toLowerCase().search(keyword.toLowerCase()) !== -1
          );
        });
        return {
          ...state,
          searchForKeyword: filteredData,
          keyword: keyword,
        };
      }
      default:
        return state;
    }
  }
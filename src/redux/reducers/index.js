import { combineReducers } from "redux";

import playlistReducer from "./playlistReducer";

const rootReducer = combineReducers({ playlistReducer });


export default rootReducer;

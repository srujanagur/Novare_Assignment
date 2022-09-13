import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import playlistReducer from "./reducers/playlistReducer";

const storeFactory = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    playlistReducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
      
    )
  );

  return reduxStore;
};

export default storeFactory;
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import profileReducer from "../reducers/profileReducer";
import networkReducer from "../reducers/networkReducer";
import friendListReducer from "../reducers/friendListReducer";
import postReducers from "../reducers/postReducer";
import currentUserReducer from "../reducers/currentUserReducer";
import newsReducer from "../reducers/newsReducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  profile: profileReducer,
  network: networkReducer,
  friendList: friendListReducer,
  post: postReducers,
  news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

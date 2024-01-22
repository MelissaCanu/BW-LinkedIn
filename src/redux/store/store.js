import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import profileReducer from "../reducers/profileReducer";
import networkReducer from "../reducers/networkReducer";
import friendListReducer from "../reducers/friendListReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  network: networkReducer,
  friendList: friendListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import profileReducer from "../reducers/profileReducer";
import networkReducer from "../reducers/networkReducer";
import friendListReducer from "../reducers/friendListReducer";
import experienceReducer from "../reducers/experienceReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  network: networkReducer,
  friendList: friendListReducer,
  experience: experienceReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

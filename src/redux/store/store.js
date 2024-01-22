import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import profileReducer from "../reducers/profileReducer";
import networkReducer from "../reducers/networkReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  network: networkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

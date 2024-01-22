import { FETCH_NETWORK_REQUEST, FETCH_NETWORK_SUCCESS, FETCH_NETWORK_FAILURE } from "../actions/networkAction";

const initialState = {
  loading: false,
  nework: {},
  error: "",
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NETWORK_REQUEST:
      return { ...state, loading: true };
    case FETCH_NETWORK_SUCCESS:
      return { ...state, loading: false, nework: action.payload, error: "" };
    case FETCH_NETWORK_FAILURE:
      return { ...state, loading: false, nework: {}, error: action.payload };
    default:
      return state;
  }
};

export default networkReducer;

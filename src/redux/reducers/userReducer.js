// /src/reducers/userReducer.js

import {
	FETCH_USER_PROFILE_REQUEST,
	FETCH_USER_PROFILE_SUCCESS,
	FETCH_USER_PROFILE_FAILURE,
} from "../actions/userActions";

const initialState = {
	profile: {},
	loading: false,
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_USER_PROFILE_SUCCESS:
			return {
				...state,
				loading: false,
				profile: action.payload,
			};
		case FETCH_USER_PROFILE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;

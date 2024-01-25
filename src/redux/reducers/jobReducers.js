// /src/reducers/jobReducer.js

import {
	FETCH_JOBS_REQUEST,
	FETCH_JOBS_SUCCESS,
	FETCH_JOBS_FAILURE,
} from "../actions/jobActions";

const initialState = {
	jobs: [],
	loading: false,
	error: null,

	bookmarks: [],
};

const jobReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_JOBS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_JOBS_SUCCESS:
			return {
				...state,
				loading: false,
				jobs: action.payload,
			};
		case FETCH_JOBS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

			return {
				...state,
				savedJobs: state.savedJobs.filter((job) => job._id !== action.payload),
			};
		default:
			return state;
	}
};

export default jobReducer;

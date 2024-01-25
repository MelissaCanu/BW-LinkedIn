// /src/reducers/jobReducer.js

import {
	FETCH_JOBS_REQUEST,
	FETCH_JOBS_SUCCESS,
	FETCH_JOBS_FAILURE,
	ADD_SAVED_JOB,
	REMOVE_SAVED_JOB,
} from "../actions/jobActions";

const initialState = {
	jobs: [],
	loading: false,
	error: null,
	savedJobs: [],
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
		case ADD_SAVED_JOB:
			return {
				...state,
				savedJobs: [...state.savedJobs, action.payload],
			};
		case REMOVE_SAVED_JOB:
			return {
				...state,
				savedJobs: state.savedJobs.filter((job) => job._id !== action.payload),
			};
		default:
			return state;
	}
};

export default jobReducer;

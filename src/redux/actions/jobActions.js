// /src/actions/jobActions.js

import axios from "axios";

export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";

// Action creators for fetching jobs
export const fetchJobsRequest = () => ({
	type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (jobs) => ({
	type: FETCH_JOBS_SUCCESS,
	payload: jobs,
});

export const fetchJobsFailure = (error) => ({
	type: FETCH_JOBS_FAILURE,
	payload: error,
});

// Async action to fetch jobs based on a specific criteria
export const fetchJobs = (criteria) => {
	return async (dispatch) => {
		dispatch(fetchJobsRequest());
		try {
			const response = await axios.get(
				`https://strive-benchmark.herokuapp.com/api/jobs${criteria}`
			);
			dispatch(fetchJobsSuccess(response.data));
		} catch (error) {
			dispatch(fetchJobsFailure(error.message));
		}
	};
};

// /src/actions/jobActions.js

import axios from "axios";

export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";

// action creators per fetchare jobs
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

// azione async per fetchare jobs in base a criteria e user ID
export const fetchJobs = (criteria, userId) => {
	return async (dispatch) => {
		dispatch(fetchJobsRequest());
		try {
			const response = await axios.get(
				`https://strive-benchmark.herokuapp.com/api/jobs${criteria}`,
				{
					headers: {
						Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDYxNzQ0ODcsImV4cCI6MTcwNzM4NDA4N30.D_oUWOkDru_J40ei7pOE0hADNvyYJtypzzIboLiccx8"}`, // Replace with your actual token
					},
				}
			);
			dispatch(fetchJobsSuccess(response.data));
		} catch (error) {
			dispatch(fetchJobsFailure(error.message));
		}
	};
};

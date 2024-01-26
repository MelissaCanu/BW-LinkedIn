import axios from "axios";

export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
export const ADD_BOOKMARKED_JOB = "ADD_BOOKMARKED_JOB";
export const REMOVE_BOOKMARKED_JOB = "REMOVE_BOOKMARKED_JOB";

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
						Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDYxNzQ0ODcsImV4cCI6MTcwNzM4NDA4N30.D_oUWOkDru_J40ei7pOE0hADNvyYJtypzzIboLiccx8"}`,
					},
				}
			);
			console.log("Fetched Jobs:", response.data);
			dispatch(fetchJobsSuccess(response.data));
		} catch (error) {
			dispatch(fetchJobsFailure(error.message));
		}
	};
};

export const addSavedJob = (job) => ({
	type: ADD_BOOKMARKED_JOB,
	payload: job,
});

export const removeSavedJob = (jobId) => ({
	type: REMOVE_BOOKMARKED_JOB,
	payload: jobId,
});

export const addBookmark = (jobId) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`https://strive-benchmark.herokuapp.com/api/jobs/${jobId}`,
				{
					headers: {
						Authorization: "your-auth-token-here",
					},
				}
			);

			const jobToAdd = Array.isArray(response.data.data)
				? response.data.data.find((job) => job._id === jobId)
				: response.data.data;

			if (jobToAdd && jobToAdd._id) {
				dispatch({
					type: ADD_BOOKMARKED_JOB,
					payload: { jobId: jobToAdd._id, ...jobToAdd },
				});
			} else {
				console.error("Invalid jobId in the fetched job details:", jobToAdd);
			}
		} catch (error) {
			console.error("Error fetching job details:", error);
		}
	};
};

export const removeBookmark = (jobId) => ({
	type: "REMOVE_BOOKMARKED_JOB",
	payload: jobId,
});

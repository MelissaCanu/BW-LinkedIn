// /src/actions/userActions.js

import axios from "axios";

export const FETCH_USER_PROFILE_REQUEST = "FETCH_USER_PROFILE_REQUEST";
export const FETCH_USER_PROFILE_SUCCESS = "FETCH_USER_PROFILE_SUCCESS";
export const FETCH_USER_PROFILE_FAILURE = "FETCH_USER_PROFILE_FAILURE";

export const fetchUserProfileRequest = () => ({
	type: FETCH_USER_PROFILE_REQUEST,
});

export const fetchUserProfileSuccess = (profile) => ({
	type: FETCH_USER_PROFILE_SUCCESS,
	payload: profile,
});

export const fetchUserProfileFailure = (error) => ({
	type: FETCH_USER_PROFILE_FAILURE,
	payload: error,
});

export const fetchUserProfile = (userId, token) => {
	return async (dispatch) => {
		dispatch(fetchUserProfileRequest());
		try {
			const response = await axios.get(
				`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log("Profile Fetch Response:", response.data);
			dispatch(fetchUserProfileSuccess(response.data));
		} catch (error) {
			dispatch(fetchUserProfileFailure(error.message));
		}
	};
};

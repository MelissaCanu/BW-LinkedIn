export const fetchUserProfileStart = () => ({
  type: "FETCH_USER_PROFILE_START",
});

export const fetchUserProfileSuccess = (userProfile) => ({
  type: "FETCH_USER_PROFILE_SUCCESS",
  payload: userProfile,
});

export const fetchUserProfileFailure = (error) => ({
  type: "FETCH_USER_PROFILE_FAILURE",
  payload: error,
});

export const fetchUserProfileAsync = (userId) => {
  return async (dispatch) => {
    dispatch(fetchUserProfileStart());
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`);
      const userProfile = await response.json();
      dispatch(fetchUserProfileSuccess(userProfile));
    } catch (error) {
      dispatch(fetchUserProfileFailure(error));
    }
  };
};

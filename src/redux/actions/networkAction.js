import axios from "axios";

export const FETCH_NETWORK_REQUEST = "FETCH_NETWORK_REQUEST";
export const FETCH_NETWORK_SUCCESS = "FETCH_NETWORK_SUCCESS";
export const FETCH_NETWORK_FAILURE = "FETCH_NETWORK_FAILURE";

const fetchNetworkRequest = () => ({
  type: FETCH_NETWORK_REQUEST,
});

const fetchNetworkSuccess = (network) => ({
  type: FETCH_NETWORK_SUCCESS,
  payload: network,
});

const fetchNetworkFailure = (error) => ({
  type: FETCH_NETWORK_FAILURE,
  payload: error,
});

export const fetchNetwork = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNzY2YzYwMGJlMTAwMTgzYTg2YzciLCJpYXQiOjE3MDU5MzIzOTYsImV4cCI6MTcwNzE0MTk5Nn0._lXDAp9GrSaRCbC4PwGaSAxnfN79__pJeNpk4ERaOD0";
  return (dispatch) => {
    dispatch(fetchNetworkRequest());
    axios
      .get("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const network = response.data;
        dispatch(fetchNetworkSuccess(network));
      })
      .catch((error) => {
        dispatch(fetchNetworkFailure(error.message));
      });
  };
};

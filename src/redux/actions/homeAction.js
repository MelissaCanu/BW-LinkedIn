export const ADD_ERROR_MESSAGE = "ADD_ERROR_MESSAGE";
export const HAS_ERROR_TRUE = "HAS_ERROR_TRUE";
export const IS_LOADING_FALSE = "IS_LOADING_FALSE";
export const IS_LOADING_TRUE = "IS_LOADING_TRUE";
export const ADD_POSTS = "ADD_POSTS";
export const ADD_CURRENT_USER_DATA = "ADD_CURRENT_USER_DATA";
export const HAS_ERROR_FALSE = "HAS_ERROR_FALSE";

export const addErrorMessageAction = (string) => ({
  type: ADD_ERROR_MESSAGE,
  payload: string,
});

export const hasErrorTrueAction = () => ({
  type: HAS_ERROR_TRUE,
  payload: true,
});

export const isLoadingFalseAction = () => ({
  type: IS_LOADING_FALSE,
  payload: false,
});

export const isLoadingTrueAction = () => ({
  type: IS_LOADING_TRUE,
  payload: true,
});

export const addCurrentUserDataAction = (dataUser) => ({
  type: ADD_CURRENT_USER_DATA,
  payload: dataUser,
});
export const hasErrorFalseAction = () => ({
  type: HAS_ERROR_FALSE,
  payload: false,
});

export const fetchPost = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoadingTrueAction());
      const risp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlOTBhNGJkNWQxMjAwMTg5MGQzMTgiLCJpYXQiOjE3MDU5MzkxMDgsImV4cCI6MTcwNzE0ODcwOH0.1uiduDteuO646k5b6tK8nq0uhzV1ZV4npoqRktlImNI",
        },
      });
      if (risp.ok) {
        const data = await risp.json();
        dispatch(ADD_POSTS(data));
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(risp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
};

import * as api from "../api/index.js";
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

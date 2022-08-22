import * as api from "../api/index.js";
export const addschooldetails = (post) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.addSchoolDetails(post);

    dispatch({ type: "ADD_CONFIG", payload: data });
    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({ type: "END_LOADING" });
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const fetchschooldetails = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await api.getSchoolDetails();

    console.log(data);

    dispatch({ type: "FETCH_ALL", payload: data });
    // dispatch({ type: "GET_SUCCESS_MSG", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({ type: "END_LOADING" });
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const addsessiondetails = (post) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.addSession(post);

    dispatch({ type: "ADD_CONFIG", payload: data });
    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({ type: "END_LOADING" });
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const addsclassdetails = (post) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.addClasses(post);

    dispatch({ type: "ADD_CONFIG", payload: data });
    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({ type: "END_LOADING" });
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const addsubjectdetails = (post) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.addSubjects(post);

    dispatch({ type: "ADD_CONFIG", payload: data });
    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({ type: "END_LOADING" });
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const addgradedetails = (post) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.addGradeInstruction(post);

    dispatch({ type: "ADD_CONFIG", payload: data });
    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({ type: "END_LOADING" });
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

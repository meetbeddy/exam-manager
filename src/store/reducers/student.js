const student = (state = { isLoading: false, students: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case "FETCH_STUDENTS":
      return {
        ...state,
        students: action.payload.data,
      };

    default:
      return state;
  }
};

export default student;

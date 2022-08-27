const initState = { isLoading: false, teachers: [] };
const teacher = (state = initState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case "FETCH_TEACHERS":
      return {
        ...state,
        teachers: action.payload.data,
      };

    default:
      return state;
  }
};

export default teacher;

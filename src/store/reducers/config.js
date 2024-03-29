const config = (state = { isLoading: false, configs: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case "FETCH_ALL":
      return {
        ...state,
        configs: action.payload.data,
      };

    default:
      return state;
  }
};

export default config;

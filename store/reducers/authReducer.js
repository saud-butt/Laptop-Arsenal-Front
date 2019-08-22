const initialState = {
  currentUser: null,
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};

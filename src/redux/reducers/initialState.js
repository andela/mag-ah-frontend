const initialState = {
  authUser: {
    message: "",
    error: {},
    fetching: false,
    fetched: false,
    success: false
  },
  resetPassword: {
    message: {},
    error: null,
    info: true
  },
  articles: []
};

export default initialState;

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
  loginUser: {
    message: {},
    error: {},
    isAuthenticated: false
  },
  message: {},
  error: {},
  isAuthenticated: false,
  token: "",
  username: null,
  email: null,
  isLogged: false,
  loading: false,
  allArticles: {
    articles: [],
    error: {},
    fetching: false,
    fetched: false,
    success: false
  }
};

export default initialState;

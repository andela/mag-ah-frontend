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
    articles: {},
    error: {},
    fetching: false,
    fetched: false,
    success: false
  },
  singleArticle: {
    article: {},
    error: {},
    fetching: false,
    fetched: false,
    success: false
  },
  createArticle: {
    message: "",
    error: {},
    fetching: false,
    fetched: false,
    success: false
  },
  deleteArticle: {
    message: "",
    error: {},
    fetching: false,
    fetched: false,
    success: false
  },
  viewArticle: {
    article: {},
    error: {}
  },
  editArticle: {
    message: "",
    error: {},
    updating: false,
    updated: false,
    success: false
  },
  articleRating: {
    response: null,
    error: null
  },
  comments: {
    comments: [],
    error: {},
    fetching: false,
    fetched: false,
    success: false
  },
  likeDislike: {
    likeMessage: "",
    dislikeMessage: "",
    liked: false,
    disliked: false,
    error: ""
  }
};

export default initialState;

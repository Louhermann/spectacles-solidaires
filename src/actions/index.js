// action type email
export const SET_SIGN_UP = 'SET_SIGN_UP';

// action creator email
export const setSignUp = (value, name) => ({
  type: SET_SIGN_UP,
  value,
  name,
});

// ACTION TYPE SET_SIGN_IN
export const SET_SIGN_IN = 'SET_SIGN_IN';

// ACTION CREATOR setSignIn
export const setSignIn = (value, name) => ({
  type: SET_SIGN_IN,
  value,
  name,
});

// action saveData
export const SAVE_DATA = 'SAVE_DATA';

// Action creator saveData
export const saveData = (data) => ({
  type: SAVE_DATA,
  data,
});

// action saveEvent
export const SAVE_EVENT = 'SAVE_EVENT';

// Action creator saveEvent
export const saveEvent = (event) => ({
  type: SAVE_EVENT,
  event,
});

// ACTION TYPE
export const SET_GO_TO_SLIDE = 'SET_GO_TO_SLIDE';

// ACTION CREATOR
export const setGoToSlide = (index) => ({
  type: SET_GO_TO_SLIDE,
  index,
});

// ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';

// ACTION CREATOR login
export const login = () => ({
  type: LOGIN,
});

// ACTION TYPE SAVE_TOKEN
export const SAVE_TOKEN = 'SAVE_TOKEN';

// ACTION CREATOR save_token
export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  token,
});

// ACTION TYPE IS_LOGGED
export const SET_IS_LOGGED = 'SET_IS_LOGGED';

// ACTION CREATOR isLogged
export const setIsLogged = (bool) => ({
  type: SET_IS_LOGGED,
  bool,
});

// ACTION TYPE LOG_OUT
export const LOG_OUT = 'LOG_OUT';

// ACTION CREATOR logOut
export const logOut = (bool) => ({
  type: LOG_OUT,
  bool,
});

// ACTION TYPE SAVE_USER
export const SAVE_USER = 'SAVE_USER';

// ACTION CREATOR saveUser
export const saveUser = (users) => ({
  type: SAVE_USER,
  users,
});

// ACTION TYPE CREATE_USER
export const CREATE_USER = 'CREATE_USER';

// ACTION CREATOR createUser
export const createUser = () => ({
  type: CREATE_USER,
});

// ACTION TYPE GETUSER
export const GET_USER = 'GET_USER';

// ACTION CREATOR getuser
export const getUser = () => ({
  type: GET_USER,
});

// ACTION TYPE GET_USER_BY_ID
export const GET_USER_BY_ID = 'GET_USER_BY_ID';

// ACTION CREATOR getUserById
export const getUserById = () => ({
  type: GET_USER_BY_ID,

});

// ACTION TYPE SAVE_USER_LOGGED
export const SAVE_USER_LOGGED = 'SAVE_USER_LOGGED';

// ACTION CREATOR saveUserLogged
export const saveUserLogged = (user) => ({
  type: SAVE_USER_LOGGED,
  user,
});

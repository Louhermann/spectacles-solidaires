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

// ACTION TYPE CONTACT
export const CONTACT = 'CONTACT';

// ACTION CREATOR CONTACT
export const contact = () => ({
  type: CONTACT,
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
export const IS_LOGGED = 'IS_LOGGED';

// ACTION CREATOR isLogged
export const isLogged = (bool) => ({
  type: IS_LOGGED,
  bool,
});

// ACTION TYPE LOG_OUT
export const LOG_OUT = 'LOG_OUT';

// ACTION CREATOR logOut
export const logOut = (bool) => ({
  type: LOG_OUT,
  bool,
});

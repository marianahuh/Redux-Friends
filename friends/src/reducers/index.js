import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions';

const initialState = {
  friends: [],
  logginIn: false,
  error: '',
  errorStatusCode: null,
  fetchingFriends: false,
  token: localStorage.getItem('token')
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        errorStatusCode: null,
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCH_DATA_FAILURE: {
      return {
        ...state,
        errorStatusCode: action.payload.status
      };
    }
    default:
      return state;
  }
};

export default reducer;

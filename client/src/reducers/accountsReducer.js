import { VERIFY_TOKEN, USER_LOGIN, USER_SIGNUP, USER_LOGOUT } from '../actions/types.js';
import { setInStorage } from '../helpers/localStorage';

const initialState = {
  token: '',
  signupErr: '',
  loginErr: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VERIFY_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case USER_LOGIN: {
      if(!action.payload.success)
        return {
          ...state,
          loginErr: action.payload.message
        };
      else {
        setInStorage('the_main_app', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          loginErr: action.payload.message
        }
      }
    }
    case USER_SIGNUP:
      if(!action.payload.success)
        return {
          ...state,
          signupErr: action.payload.message
        };
    case USER_LOGOUT:
        return {
          ...state,
          token: '',
          loginErr: '',
          signupErr: ''
        };

    default:
      return state;
  }
}

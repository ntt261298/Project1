import axios from 'axios';
import { VERIFY_TOKEN, USER_LOGIN, USER_SIGNUP, USER_LOGOUT } from './types.js';
import { getFromStorage } from '../helpers/localStorage';

export const verifyToken = () => dispatch => {
  const token = getFromStorage('the_main_app');
  if(token) {
    axios.get(`/api/account/verify?token=${token}`)
      .then(res => {
        if(res.data.success)
          dispatch({
            type: VERIFY_TOKEN,
            payload: token
          })
        }
      )
  }
}

export const userLogin = (username, password) => dispatch => {
    axios.post('/api/account/signin', {
      username: username,
      password: password
    }).then(res =>
      dispatch({
        type: USER_LOGIN,
        payload: res.data
      })
    )
}

export const userSignup = (username, password, repassword) => dispatch => {
    axios.post('/api/account/signup', {
      username: username,
      password: password,
      repassword: repassword
    }).then(res =>
      dispatch({
        type: USER_SIGNUP,
        payload: res.data
      })
    )
}

export const userLogout = token => dispatch => {
    axios.get(`/api/account/logout?token=${token}`)
    .then(res => {
      if(res.data.success)
        dispatch({
          type: USER_LOGOUT,
        })
    })
}

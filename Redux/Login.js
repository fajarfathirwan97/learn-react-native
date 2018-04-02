import Login from "localSaga";

import { createActions, createReducer } from "reduxsauce";

// INITAL STATE
const INITIAL_STATE = {
  data: [],
  fetching: false,
  form: {
    username: '',
    password: '',
  },
  message: '',
}
// ACTION
const { Types, Creators } = createActions({
  loginRequest: ['form'],
})

export const LoginTypes = Types
export default Creators

const request = (state, action) => {
  return state = {
    ...state,
    fetching: true
  }
}

export const HANDLERS = {
  [Types.LOGIN_REQUEST]: request,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)


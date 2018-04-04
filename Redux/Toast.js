import { createActions, createReducer } from 'reduxsauce'
import { trans } from '../Lang'

// INITAL STATE
const INITIAL_STATE = {
  show: false,
  message: ''
}
// ACTION
const { Types, Creators } = createActions({
  show: ['message'],
  hide: [],
})

export const ToastTypes = Types
export default Creators

const show = (state, action) => {
  let { message } = action
  switch (message) {
  case 'TIMEOUT_ERROR': {
    message = trans('en.http.timeout')
    break
  }
  case 'CLIENT_ERROR': {
    message = trans('en.http.client')
    break
  }
  case 'SERVER_ERROR': {
    message = trans('en.http.server')
    break
  }
  case 'CONNECTION_ERROR': {
    message = trans('en.http.connection')
    break
  }
  case 'NETWORK_ERROR': {
    message = trans('en.http.network')
    break
  }
  default:
    break
  }
  return state = {
    ...state,
    show: true,
    message: message

  }
}
const hide = (state, action) => {
  return state = {
    ...state,
    show: false,
  }
}
export const HANDLERS = {
  [Types.SHOW]: show,
  [Types.HIDE]: hide,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)


import { createActions, createReducer } from 'reduxsauce'

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
  return state = {
    ...state,
    show: true,
    message: action.message

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


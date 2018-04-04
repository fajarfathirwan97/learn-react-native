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
  request: [],
  setForm: ['form'],
  post: ['form']
})

export const LoginTypes = Types
export default Creators

const request = (state, action) => {
  return state = {
    ...state,
    fetching: true
  }
}
const setForm = (state, action) => {
  return state = {
    ...state,
    form: {
      ...state.form,
      ...action.form
    }
  }
}

export const HANDLERS = {
  [Types.REQUEST]: request,
  [Types.SET_FORM]: setForm,
  [Types.POST]: request,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)


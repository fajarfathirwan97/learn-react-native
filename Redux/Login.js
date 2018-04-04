import { createActions, createReducer } from 'reduxsauce'

// INITAL STATE
const INITIAL_STATE = {
  data: [],
  fetching: false,
  form: {
    username: '',
    password: '',
  },
}
// ACTION
const { Types, Creators } = createActions({
  request: [],
  setForm: ['form'],
  post: ['form'],
  success: ['data'],
  failure: ['data']
})

export const LoginTypes = Types
export default Creators

const request = (state, action) => {
  return state = {
    ...state,
    fetching: true
  }
}
const success = (state, action) => {
  return state = {
    ...state,
    fetching: false,
    data: action.data
  }
}

const failure = (state, action) => {
  return state = {
    ...state,
    fetching: false,
    data: action.data
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
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
  [Types.SET_FORM]: setForm,
  [Types.POST]: request,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)


import { call, put } from 'redux-saga/effects'

import LoginActions from '../Redux/Login'
import ToastActions from '../Redux/Toast'

// attempts to login
export function* login(api, action) {
  const { type, form } = action
  let response
  try {
    switch (type) {
    case 'POST': {
      response = yield call(api.authLogin, form)
      break
    }
    default:
      break
    }
    if (response.ok)
      yield put(LoginActions.success(response.data.data))
    else {
      yield put(LoginActions.failure(response.data.meta))
      yield put(ToastActions.show(response.data.meta.message))
    }


  } catch (error) {
    console.log(error)
  }
}
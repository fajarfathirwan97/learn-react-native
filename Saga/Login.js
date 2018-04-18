import { call, put } from 'redux-saga/effects'
import { NavigationActions, } from 'react-navigation'
import LoginActions from '../Redux/Login'
import ToastActions from '../Redux/Toast'
import *  as NavigatorHelper from '../CustomLib/NavigatorHelper'
import * as AsyncStorage from '../CustomLib/AsyncStorage'

// attempts to login
export function* login(api, action) {
  const { type, form } = action
  let response
  try {
    switch (type) {
    case 'POST': {
      response = yield call(api.authLogin, form)
      if (response.ok) {
        yield put(LoginActions.success(response.data.data))
        AsyncStorage.setItem('token', response.data.data.token)
        NavigatorHelper.navigate(NavigationActions.navigate({
          routeName: 'Home',
        }))
      }
      break
    }
    default:
      break
    }
    if (!response.ok) {
      if (response.data) {
        yield put(ToastActions.show(response.data.meta.message))
        yield put(LoginActions.failure(response.data.meta))
      } else {
        yield put(ToastActions.show(response.problem))
        yield put(LoginActions.failure())
      }
    }


  } catch (error) {
    yield put(ToastActions.show('UNKNOWN ERROR'))
    yield put(LoginActions.failure())
    console.log(error)
  }
}
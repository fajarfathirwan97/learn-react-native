/**
 * @providesModule localSaga
 */

import { login } from './Login'
import { LoginTypes } from '../Redux/Login'
import { takeLatest } from 'redux-saga/effects'
import APIService from '../CustomLib/APIService'
const api = APIService.create()
export default function* root() {
  try {
    yield takeLatest(LoginTypes.POST, login, api)
  } catch (error) {
    console.log(error)
  }
}
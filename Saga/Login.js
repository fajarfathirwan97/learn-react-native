import { call, put } from "redux-saga/effects";

import LoginActions from '../Redux/Login'
import APIService from "../CustomLib/APIService";

// attempts to login
export function* login(api, action) {
  const { type, form } = action
  try {
    switch (type) {
      case 'POST':
        const response = yield call(api.authLogin, form)
        console.log(response)
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error)
  }
}
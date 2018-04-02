/**
 * @providesModule localSaga
 */

import { login } from "./Login";
import { LoginTypes } from "../Redux/Login";
import { takeLatest } from "redux-saga/effects";

export default function* root() {
  try {
    [
      takeLatest(LoginTypes.LOGIN_REQUEST, login)
    ]
  } catch (error) {
    console.log(error)
  }
}
import { call, put, takeLatest } from "redux-saga/effects";

// action
import { SIGNUP, signupFail, signupSuccess } from "../action/signupAction";

// api
import signupApi from "../api/signupApi";

export function* signupSaga(action) {
  try {
    const response = yield call(() => signupApi(action.params));
    if (response) {
      yield put(signupSuccess(response, action));
    } else {
      yield put(signupFail(response, action));
    }
  } catch (e) {
    console.log("error", e);
    return e;
  }
}

export default function* mySaga() {
  yield takeLatest(SIGNUP, signupSaga);
}

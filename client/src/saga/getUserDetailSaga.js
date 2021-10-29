import { call, put, takeLatest } from "redux-saga/effects";

// action
import {
  GET_USER_DETAIL,
  getUserDetailFail,
  getUserDetailSuccess,
} from "../action/getUserDetailAction";

// api
import getUserDetailApi from "../api/getUserDetailApi";

export function* getUserDetailSaga(action) {
  try {
    const response = yield call(() => getUserDetailApi(action.params));
    if (response) {
      yield put(getUserDetailSuccess(response, action));
    }
  } catch (e) {
    yield put(getUserDetailFail(e.response, action));
  }
}

export default function* mySaga() {
  yield takeLatest(GET_USER_DETAIL, getUserDetailSaga);
}

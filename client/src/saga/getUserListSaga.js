import { call, put, takeLatest } from "redux-saga/effects";

// action
import {
  GET_USER_LIST,
  getUserListFail,
  getUserListSuccess,
} from "../action/getUserListAction";

// api
import getUserListApi from "../api/getUserListApi";

export function* getUserListSaga(action) {
  try {
    const response = yield call(() => getUserListApi(action.params));
    if (response) {
      yield put(getUserListSuccess(response, action));
    }
  } catch (e) {
    yield put(getUserListFail(e.response, action));
  }
}

export default function* mySaga() {
  yield takeLatest(GET_USER_LIST, getUserListSaga);
}

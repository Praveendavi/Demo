import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";

// saga
import getUserListSaga from "./saga/getUserListSaga";
import getUserDetailSaga from "./saga/getUserDetailSaga";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(getUserListSaga);
sagaMiddleware.run(getUserDetailSaga);

export default store;

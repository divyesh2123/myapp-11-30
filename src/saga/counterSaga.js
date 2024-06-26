import { delay, put, takeEvery } from "redux-saga/effects"
import { Increment } from "../action/counteraction"


export function* incrementAsync() {
    yield delay(1000)
    yield put(Increment())
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }

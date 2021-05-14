import { put, takeEvery } from 'redux-saga/effects'

import { incrementCreator, ASYNC_INCREMENT, decrementCreator, ASYNC_DECREMENT } from './counter'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export function* incrementWorker() {
  yield delay(500)
  yield put(incrementCreator())
}

export function* decrementWorker() {
  yield delay(500)
  yield put(decrementCreator())
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker)
  yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}

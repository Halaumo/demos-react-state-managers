import { put, call, delay, takeLeading } from 'redux-saga/effects'

import { setUsers, user, FETCH_USERS } from './users'

const fetchUsersFromApi = (id: number) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

export function* fetchUserWorker(action: any) {
  yield delay(500)
  const data: Response = yield call(fetchUsersFromApi, action.payload)
  const json: user = yield call(() => Promise.resolve(data.json()))
  yield put(setUsers(json))
}

export function* userWatcher() {
  yield takeLeading(FETCH_USERS, fetchUserWorker)
}

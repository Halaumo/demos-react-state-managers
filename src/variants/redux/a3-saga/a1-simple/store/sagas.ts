import { all } from 'redux-saga/effects'

import { countWatcher } from './counter/saga'
import { userWatcher } from './users/saga'

export function* rootWatcher() {
  yield all([countWatcher(), userWatcher()])
}

import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { countReducer } from './counter/counter'
import { userReducer } from './users/users'
import { rootWatcher } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  counter: countReducer,
  users: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootWatcher)
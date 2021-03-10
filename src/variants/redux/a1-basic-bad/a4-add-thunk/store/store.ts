import { createStore, combineReducers, applyMiddleware } from 'redux'
import { customersReducer } from './features/customerReducer'
import thunk from 'redux-thunk'
import { cashReducer } from './features/cashReducer'

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

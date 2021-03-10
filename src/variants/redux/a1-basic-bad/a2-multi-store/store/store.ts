import { createStore, combineReducers } from 'redux'
import { customersReducer } from './features/customerReducer'
import { cashReducer } from './features/cashReducer'

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
})

export const store = createStore(rootReducer)

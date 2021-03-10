import { customersSlice } from './features/customer'
import { cashSlice } from './features/cash'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cash: cashSlice.reducer,
    customers: customersSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

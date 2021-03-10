import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const cashSlice = createSlice({
  name: 'cash',
  initialState: {
    cash: 1000,
  },
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.cash += action.payload
    },
    sub: (state, action: PayloadAction<number>) => {
      state.cash -= action.payload
    },
  }
})

export const { add, sub } = cashSlice.actions

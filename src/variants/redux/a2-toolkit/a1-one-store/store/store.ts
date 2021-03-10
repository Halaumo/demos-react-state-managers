import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1000,
  },
  reducers: {
    add: (state, action) => {
      state.value += action.payload
    },
    sub: (state, action) => {
      state.value -= action.payload
    },
  }
})

export const { add, sub } = counterSlice.actions

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

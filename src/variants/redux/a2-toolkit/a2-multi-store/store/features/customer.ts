import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface customer {
  id: number
  name: string
}

export const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [] as customer[]
  },
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload as customer)
    },
    addCustomers: (state, action: PayloadAction<customer[]>) => {
      state.customers = [...state.customers, ...action.payload]
    },
    removeCustomer: (state, action: PayloadAction<customer>) => {
      state.customers = state.customers.filter(({ id }) => id !== action.payload.id)
    },
  },
})

export const { addCustomer, addCustomers, removeCustomer } = customersSlice.actions

export const fetchCustomers = () => (dispath: Function) => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => dispath(addCustomers(json)))
}

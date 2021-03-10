interface customersState {
  customers: customer[]
}
export interface customer {
  id: number
  name: string
}

const defaultState: customersState = {
  customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const ADD_CUSTOMERS = 'ADD_CUSTOMERS'
const REMOVE = 'REMOVE_CUSTOMER'

interface myAction {
  type: typeof ADD_CUSTOMER | typeof REMOVE | typeof ADD_CUSTOMERS
  payload: customer | customer[]
}

export const customersReducer = (state = defaultState, action: myAction): customersState => {
  switch (action.type) {
    case ADD_CUSTOMERS: return { ...state, customers: [...state.customers, ...(action.payload as customer[])] }
    case ADD_CUSTOMER: return { ...state, customers: [...state.customers, (action.payload as customer)] }
    case REMOVE: return { ...state, customers: [...state.customers.filter(({ id }) => id !== (action.payload as customer).id )] }
    default: return state
  }
}

export const addCustomer = (payload: customer) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomer = (payload: customer) => ({ type: REMOVE, payload })
export const addCustomers = (payload: customer[]) => ({ type: ADD_CUSTOMERS, payload })

export const fetchCustomers = () => (dispath: Function) => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => dispath(addCustomers(json)))
}

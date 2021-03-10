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

const ADD = 'ADD_CUSTOMER'
const REMOVE = 'REMOVE_CUSTOMER'

interface myAction {
  type: typeof ADD | typeof REMOVE
  payload: customer
}

export const customersReducer = (state = defaultState, action: myAction): customersState => {
  switch (action.type) {
    case ADD: return { ...state, customers: [...state.customers, action.payload] }
    case REMOVE: return { ...state, customers: [...state.customers.filter(({ id }) => id !== action.payload.id)] }
    default: return state
  }
}

export const addCustomer = (payload: customer) => ({ type: ADD, payload })
export const removeCustomer = (payload: customer) => ({ type: REMOVE, payload })


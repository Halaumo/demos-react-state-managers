import { createStore } from 'redux'
interface myState {
  cash: number
}

const defaultState: myState = {
  cash: 1000,
}

export const ADD = 'ADD'
export const SUB = 'SUB'


interface myAction {
  type: typeof ADD | typeof SUB
  payload: number
}

const reducer = (state = defaultState, action: myAction): myState => {
  switch (action.type) {
    case ADD: return { ...state, cash: state.cash + action.payload }
    case SUB: return { ...state, cash: state.cash - action.payload }
    default: return state
  }
}

export const store = createStore(reducer)

// export default store

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

export const cashReducer = (state = defaultState, action: myAction): myState => {
  switch (action.type) {
    case ADD: return { ...state, cash: state.cash + action.payload }
    case SUB: return { ...state, cash: state.cash - action.payload }
    default: return state
  }
}
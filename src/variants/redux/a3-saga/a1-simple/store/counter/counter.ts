const defaultState = {
  count: 0,
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT'
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT'

export function countReducer(state = defaultState, action: counterActions) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
  }
  return state
}

export const incrementCreator = (): { type: typeof INCREMENT } => ({ type: INCREMENT })
export const asyncIncrementCreator = (): { type: typeof ASYNC_INCREMENT } => ({
  type: ASYNC_INCREMENT,
})
export const decrementCreator = (): { type: typeof DECREMENT } => ({ type: DECREMENT })
export const asyncDecrementCreator = (): { type: typeof ASYNC_DECREMENT } => ({
  type: ASYNC_DECREMENT,
})

type counterActions =
  | ReturnType<typeof incrementCreator>
  | ReturnType<typeof asyncIncrementCreator>
  | ReturnType<typeof decrementCreator>
  | ReturnType<typeof asyncDecrementCreator>

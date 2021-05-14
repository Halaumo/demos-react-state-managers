export interface user {
  id: number
  name: string
}

const defaultState: { users: user[], id: number } = {
  users: [],
  id: 1,
}

const SET_USERS = 'SET_USERS'
export const FETCH_USERS = 'FETCH_USERS'

export function userReducer(state = defaultState, action: userActions) {
  switch (action.type) {
    case SET_USERS:
      return { ...state,  users: [...state.users, action.payload], id: state.id + 1 }
  }
  return state
}

export const setUsers = (payload: user): { type: typeof SET_USERS, payload: user } => ({ type: SET_USERS, payload })

export const fetchUsers = (payload: number): { type: typeof FETCH_USERS, payload: number } => ({ type: FETCH_USERS, payload })

type userActions = ReturnType<typeof setUsers> | ReturnType<typeof fetchUsers>

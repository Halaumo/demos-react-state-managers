
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchUsers } from '../store/users/users'
import { RootState, AppDispatch } from '../store/index'

const Div = styled.div`
  display: flex;
  margin: -10px;

  & > button {
    margin: 10px;
  }
`

const Users = styled.div`
    margin-top: 5%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const User = styled.div`
    width: 20%;
    border-radius: 3px;
    border: 1px solid teal;
    margin-top: 10px;
    padding: 10px;
    font-size: 1.4rem;
`

const App = () => {
  const dispatch: AppDispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)
  const nextUserId = useSelector((state: RootState) => state.users.id)

  const fetchUsersHandler = () => {
    dispatch(fetchUsers(nextUserId))
  }

  return (
    <>
      <h1>USERS, Next id = {nextUserId}</h1>
      <Div>
        <button onClick={() => fetchUsersHandler()}>FETCH USERS</button>
      </Div>
      <Users>
        {users.map((user) =>
          <User key={user.id}>
            ID = {user.id} | NAME = {user.name}
          </User>
        )}
      </Users>
    </>
  )
}

export default App;

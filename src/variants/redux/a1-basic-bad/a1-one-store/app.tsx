
import { useDispatch, useSelector } from 'react-redux'
import { ADD, SUB } from './store/store'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  margin: -10px;

  & > button {
    margin: 10px;
  }
`

const App = () => {
  const dispatch = useDispatch()
  const cash = useSelector((state: any) => state.cash)

  const add = (value: number) => {
    dispatch({ type: ADD, payload: value })
  }

  const sub = (value: number) => {
    dispatch({ type: SUB, payload: value })
  }

  return (
    <>
      <h1>APP PAGE</h1>
      <p>CASH = {cash}</p>
      <Div>
        <button onClick={() => add(100)}>ADD</button>
        <button onClick={() => sub(100)}>ADD</button>
      </Div>
    </>
  )
}

export default App;

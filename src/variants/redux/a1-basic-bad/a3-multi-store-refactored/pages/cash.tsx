
import { useDispatch, useSelector } from 'react-redux'
import { addCash, removeCash } from '../store/features/cashReducer'
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
  const cash = useSelector((state: any) => state.cash.cash)

  const add = (value: number) => {
    dispatch(addCash(value))
  }

  const sub = (value: number) => {
    dispatch(removeCash(value))
  }

  return (
    <>
      <h1>Cash PAGE</h1>
      <p>CASH = {cash}</p>
      <Div>
        <button onClick={() => add(100)}>ADD</button>
        <button onClick={() => sub(100)}>ADD</button>
      </Div>
    </>
  )
}

export default App;

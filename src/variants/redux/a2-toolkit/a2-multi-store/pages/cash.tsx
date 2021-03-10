
import { useDispatch, useSelector } from 'react-redux'
import { add, sub } from '../store/features/cash'
import { RootState, AppDispatch } from '../store/store'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  margin: -10px;

  & > button {
    margin: 10px;
  }
`

const App = () => {
  const dispatch: AppDispatch = useDispatch()
  const cash = useSelector((state: RootState) => state.cash.cash)

  const addHandler = (value: number) => {
    dispatch(add(value))
  }

  const subHandler = (value: number) => {
    dispatch(sub(value))
  }

  return (
    <>
      <h1>Cash PAGE</h1>
      <p>CASH = {cash}</p>
      <Div>
        <button onClick={() => addHandler(100)}>Add</button>
        <button onClick={() => subHandler(100)}>Sub</button>
      </Div>
    </>
  )
}

export default App;

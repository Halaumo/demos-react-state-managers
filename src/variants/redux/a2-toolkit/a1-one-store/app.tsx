
import { useDispatch, useSelector } from 'react-redux'
import { add, sub } from './store/store'
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
  const cash = useSelector((state: any) => state.counter.value)

  const addHandler = (value: number) => {
    dispatch(add(value))
  }

  const subHandler = (value: number) => {
    dispatch(sub(value))
  }

  return (
    <>
      <h1>APP PAGE</h1>
      <p>CASH = {cash}</p>
      <Div>
        <button onClick={() => addHandler(100)}>ADD</button>
        <button onClick={() => subHandler(100)}>SUB</button>
      </Div>
    </>
  )
}

export default App;

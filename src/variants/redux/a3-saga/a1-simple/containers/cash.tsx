import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import {
  asyncDecrementCreator,
  asyncIncrementCreator,
  decrementCreator,
  incrementCreator,
} from '../store/counter/counter'
import { RootState, AppDispatch } from '../store/index'

const Div = styled.div`
  display: flex;
  margin: -10px;

  & > button {
    margin: 10px;
  }
`

const App = () => {
  const dispatch: AppDispatch = useDispatch()
  const cash = useSelector((state: RootState) => state.counter.count)

  const addAsync = () => {
    dispatch(asyncIncrementCreator())
  }

  const addSync = () => {
    dispatch(incrementCreator())
  }

  const subAsync = () => {
    dispatch(asyncDecrementCreator())
  }

  const subSync = () => {
    dispatch(decrementCreator())
  }

  return (
    <>
      <p>CASH = {cash}</p>
      <Div>
        <button onClick={() => addAsync()}>ADD ASYNC</button>
        <button onClick={() => addSync()}>ADD SYNC</button>
        <button onClick={() => subAsync()}>SUB ASYNC</button>
        <button onClick={() => subSync()}>SUB SYNC</button>
      </Div>
    </>
  )
}

export default App

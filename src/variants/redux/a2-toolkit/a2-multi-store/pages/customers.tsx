
import { useDispatch, useSelector } from 'react-redux'
import { addCustomer, removeCustomer, customer, fetchCustomers } from '../store/features/customer'
import { RootState, AppDispatch } from '../store/store'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  margin: -10px;

  & > button {
    margin: 10px;
  }
`

const Customer = styled.div`
  width: 300px;
  padding: 15px;
  border: 1px solid black;
  margin-top: 10px;

  &:hover {
    background-color: red;
  }
`

const App = () => {
  const dispatch: AppDispatch = useDispatch()
  const customers = useSelector((state: RootState) => state.customers.customers)

  const add = (name: string) => {
    const customer = { name, id: Date.now() }
    dispatch(addCustomer(customer))
  }

  const remove = (currentCustomer: customer) => {
    dispatch(removeCustomer(currentCustomer))
  }

  return (
    <>
      <Div>
        <button onClick={() => add(`${prompt()}`)}>ADD Customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов</button>
      </Div>

      <div>
        { customers.length === 0
        ? <h1>Нет пользователей</h1>
        : customers.map((customer) => <Customer onClick={() => remove(customer)} key={customer.id}>{customer.name}</Customer>)
        }
      </div>
    </>
  )
}

export default App;

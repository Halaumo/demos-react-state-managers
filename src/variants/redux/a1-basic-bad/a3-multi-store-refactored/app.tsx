import Nav from './components/nav'
import { Route, Switch } from 'react-router-dom'
import CashPage from './pages/cash'
import CustomersPage from './pages/customers'


const App = () => {


  return (
    <>
      <Nav />

      <Switch>
        <Route path='/cash' exact>
          <CashPage />
        </Route>

        <Route path='/customers' exact>
          <CustomersPage />
        </Route>

        <Route path='/' exact>
          <h1>Home page</h1>
        </Route>
      </Switch>
    </>
  )
}

export default App;

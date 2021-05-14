import { store } from './store/index'
import { Provider } from 'react-redux'
import App from './app'

const Index = () => {

  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  )
}

export default Index;
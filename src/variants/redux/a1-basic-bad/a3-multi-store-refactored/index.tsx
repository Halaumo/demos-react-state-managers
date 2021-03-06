import { store } from './store/store'
import { Provider } from 'react-redux'
import App from './app'

const Index = () => {

  return (
    <>
      <>
        <Provider store={store}>
          <App />
        </Provider>
      </>
    </>
  )
}

export default Index;
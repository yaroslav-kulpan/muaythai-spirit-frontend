import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'


const store = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware())
  )
}

export default store;

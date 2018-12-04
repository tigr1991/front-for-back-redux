import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

const middleware = applyMiddleware(thunk, createLogger())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = window.__init__

const store = createStore(rootReducer, initialState, composeEnhancers(middleware))

const configureStore = () => {
  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

export default configureStore

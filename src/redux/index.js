import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import DevTool from '../containers/devtool'

const logger = createLogger()

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state = {count: state.count + 1}
    case 'DECREMENT':
      return state = {count: state.count - 1}
    default:
      return state
  }
}

const store = createStore(reducer, DevTool.instrument())

export default store
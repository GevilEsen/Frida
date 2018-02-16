import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DevTool from '../containers/devtool'

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.count + 1
    case 'DECREMENT':
      return state.count - 1
    default:
      return state
  }
}

const store = createStore(reducer, DevTool.instrument())

export default store
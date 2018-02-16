import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DevTool from '../containers/devtool'
import state1 from './state.js'
import action1 from './action.js'

const reducer = (state = state1, action = action1) => {
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
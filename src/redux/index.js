import { createStore, applyMiddleware } from 'redux'
import DevTool from '../containers/devtool'

const counter = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.count + 1
    case 'DECREMENT':
      return state.count - 1
    default:
      return state
  }
}
const store = createStore(counter, DevTool.instrument())

export default store
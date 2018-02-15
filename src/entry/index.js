import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureRoutes from '../routes'
import store from '../redux'
import Root from '../containers/root'
import Home from '../containers/home'
// import configureStore from 'store'

// const store = configureStore(window.REDUX_STATE, { routing: routerReducer })

const routes = configureRoutes(store.getState());

// console.log(routerReducer)

render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}>
      </Router>
    </Provider>, document.getElementById('app'))
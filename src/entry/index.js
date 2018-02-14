import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
// import configureStore from 'store'
import Root from '../containers/routes/index.jsx'

// const store = configureStore(window.REDUX_STATE, { routing: routerReducer })

render(
    <Root />, document.getElementById('app'))
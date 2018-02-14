import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from '../home'
import Login from '../login'
import Basic from '../basic'
import style from './index.less'

class Routes extends React.Component {
  render() {
    return (
      <div className={style.root}>
        <Router history={browserHistory}>
          <Route path="/" component={Home}>
            <IndexRoute component={Home} />
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/basic" component={Basic}></Route>
        </Router>
      </div>
    )
  }
}

export default Routes
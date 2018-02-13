import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Home from '../home'
import Login from '../login'

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={Home}/>
        </Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    )
  }
}

export default Routes
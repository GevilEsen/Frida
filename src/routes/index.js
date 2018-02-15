import Home from '../containers/home'
import Login from '../containers/login'
import Basic from '../containers/basic'

const routes = [
  {
    path: '/',
    component: Home,
    indexRoute: {
      component: Home
    },
    childRoutes: [
      {
        path: 'basic',
        component: Basic
      }, {
        path: 'login',
        component: Login
      }
    ]
  }
]

export default routes
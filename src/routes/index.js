import Home from '../containers/home'
import Login from '../containers/login'
import Basic from '../containers/basic'
import Root from '../containers/root';

const routes = (param) => {
  return [
    {
      path: '/',
      component: Home,
      childRoutes: [
        {
          path: 'index(.html)',
          component: Home
        }
      ]
    }, {
      path: 'basic',
      component: Basic
    }, {
      path: 'login',
      component: Login
    }
  ]
}

export default routes
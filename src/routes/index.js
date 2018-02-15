import Home from '../containers/home'
import Login from '../containers/login'
import Basic from '../containers/basic'
import Root from '../containers/root';

const requireAuth = (state, replace, param) => {
  console.log(param)
}

const routes = (param) => {
  return [
    {
      path: '/',
      component: Root,
      childRoutes: [
        {
          path: 'index(.html)',
          component: Home
        }, {
          path: 'basic',
          component: Basic
        }, {
          path: 'login',
          component: Login
        }
      ],
      onEnter: function (nextState, replaceState) {
        requireAuth(nextState, replaceState, param);
      }
    }
  ]
}

export default routes
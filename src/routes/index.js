import Home from '../containers/home'
import Login from '../containers/login'
import Basic from '../containers/basic'
import Root from '../containers/root';

const routes = [
  {
    path: '/',
    component: Root,
    childRoutes: [
      {
        path: 'index(.html)',
        component: Home
      }, {
        path: 'basic',
        component: Basic,
        childRoutes: [
          { path: '/messages/:id', component: Home },
        ]
      }, {
        path: 'login',
        component: Login
      }
    ]
  }
]


export default routes
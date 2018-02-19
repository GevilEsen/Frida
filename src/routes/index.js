import Root from 'containers/root'
import Home from 'containers/home'
import Login from 'containers/login'
import Basic from 'containers/basic'
import Settings from 'containers/settings'

const routes = [
  {
    path: '/',
    component: Root,
    childRoutes: [
      {
        path: 'index(.html)',
        component: Home
      },
      {
        path: 'settings',
        component: Settings
      },
      {
        path: 'basic',
        component: Basic,
        childRoutes: [
          {
            path: 'index',
            component: Login
          }
        ]
      }, {
        path: 'login',
        component: Login
      }
    ]
  }
]


export default routes
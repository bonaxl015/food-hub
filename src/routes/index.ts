import Welcome from '@/screens/welcome'
import Login from '@/screens/login'
import AppContainer from '@/screens/app-container'

const routes = [
  {
    key: 'welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    key: 'login',
    name: 'login',
    component: Login
  },
  {
    key: 'app-container',
    name: 'app-container',
    component: AppContainer
  }
]

export default routes

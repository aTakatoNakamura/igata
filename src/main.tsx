import Login from '@/app/containers/Login'
import TodoApp from '@/app/containers/TodoApp'
import { configureStore } from '@/app/store'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'

import '@/assets/css/reboot.css'

import '@/assets/css/common.scss'
import { Authenticated } from './app/helpers/Authenticated'

if (process.env.NODE_ENV !== 'production') {
  console.info('Build with development mode')
}

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Authenticated>
          <Route exact path="/" component={TodoApp} />
        </Authenticated>
        <Redirect to="/" />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

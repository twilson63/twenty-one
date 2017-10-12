import 'tachyons'
import 'animate.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux-zero'
import store from './store'

import App from './app'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

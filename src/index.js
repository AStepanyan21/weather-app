import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {store} from './core/store'
import './index.css'

const app = (
  <Provider store = {store}>
    <App/>
  </Provider>
  )


ReactDOM.render(app,document.getElementById('root'))

serviceWorker.unregister()

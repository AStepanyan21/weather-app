import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import rootReducer from  './store/reducers/rootReducer'
import * as serviceWorker from './serviceWorker'

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = (
  <Provider store = {store}>
    <App/>
  </Provider>
  )


ReactDOM.render(app,document.getElementById('root'))

serviceWorker.unregister()
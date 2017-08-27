import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import App from './components/app'
import reducers from './reducers'
import '../styles/style.css'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div className="container">
      <h1>Wikipedia Search</h1>
      <App />
    </div>
  </Provider>
  , document.querySelector('.container')
)
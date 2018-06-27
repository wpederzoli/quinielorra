import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as firebase from 'firebase'
import { FIREBASE_CONFIG } from './src/Constants'

import Router from './src/Navigation'
import reducers from './src/Reducers'

firebase.initializeApp(FIREBASE_CONFIG) 

export default class App extends Component {
  render() {

    const store = createStore(reducers, {}, applyMiddleware(thunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}


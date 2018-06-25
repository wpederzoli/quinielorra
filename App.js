import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import Home from './src/Screens/Home'
import reducers from './src/Reducers'

export default class App extends Component {
  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}


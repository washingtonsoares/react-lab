import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import multi from 'redux-multi'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import UserList from './user-list'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(devTools)

ReactDOM.render(
  <Provider store={store}>
    <UserList message="Bem vindo aos usuários" />
  </Provider>
  , document.querySelector('div[data-js="app"]')
 )

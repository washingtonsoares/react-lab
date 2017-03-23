import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import about from '../about/about'

export default props => (
  <Router history={hashHistory}>
    <Route path='/todos' component={Todo} />
    <Route path='/about' component={about} />
    <Redirect from='*' to='/todos' />
  </Router>
)

import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
  <div>
    <ClassComponent value='Washington' />
  </div>
  , document.querySelector('div[data-js="app"]')
 )

import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
  <div>
    <ClassComponent initialValue={10} label="Olá" />
  </div>
  , document.querySelector('div[data-js="app"]')
 )

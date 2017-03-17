import React from 'react'
import ReactDOM from 'react-dom'
import {Primeiro, Segundo} from './componente'

ReactDOM.render(
  <div>
    <Primeiro />
    <Segundo />
  </div>
  , document.querySelector('div[data-js="app"]')
 )

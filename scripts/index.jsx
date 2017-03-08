import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <div>
    <Family lastName="da silva">
      <Member name="José"></Member>
    </Family>
  </div>
  , document.querySelector('div[data-js="app"]')
 )

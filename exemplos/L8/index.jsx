import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <div>
    <Family>
      <Member name='José' lastName='da silva' />
    </Family>
  </div>
  , document.querySelector('div[data-js="app"]')
 )

import React from 'react'
import Member from './member'
import { childrenWithProps } from '../utils/reactUtils.js'

export default props => (
  <div>
    <h1>Familia {props.lastName}</h1>
    { childrenWithProps(props.children, props) }
  </div>
)

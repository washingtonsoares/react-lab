import React from 'react'
import Show from './show'

const UserList = props => (
  <ul>
		<li>User 1</li>
		<li>User 2</li>
		<li>User 3</li>
		<li>User 4</li>
  </ul>
)

export default Show(UserList)

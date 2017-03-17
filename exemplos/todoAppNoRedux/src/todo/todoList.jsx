import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(item => (
      <tr key={item._id} className={item.done ? 'success markedAsDone' : ''}>
        <td>{item.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={item.done} onClick={() => props.handleMarkAsDone(item)} />
          <IconButton style='warning' icon='undo' hide={!item.done} onClick={() => props.handleMarkAsPending(item)} />
          <IconButton style='danger' icon='trash-o' hide={!item.done} onClick={() => props.handleRemove(item)} />
        </td>
      </tr>
    ))
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

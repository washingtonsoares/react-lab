import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleTodo, remove } from './todoActions'

import IconButton from '../template/iconButton'
import Alert from '../template/alert'
import If from '../template/if'

const TodoList = props => {
  console.log(props)
  const renderRows = () => {
    const list = props.list || []
    return list.map(item => (
      <tr key={item._id} className={item.done ? 'success markedAsDone' : ''}>
        <td>{item.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={item.done} onClick={() => props.toggleTodo(item)} />
          <IconButton style='warning' icon='undo' hide={!item.done} onClick={() => props.toggleTodo(item)} />
          <IconButton style='danger' icon='trash-o' hide={!item.done} onClick={() => props.remove(item)} />
        </td>
      </tr>
    ))
  }
  return (
    <div>
      <If test={!props.list.length && !props.description}>
        <Alert type='info' message=' Você ainda não possui itens no seu todo list !' />
      </If>
      <If test={!props.list.length && props.description}>
        <Alert type='warning' message=' Nenhum resultado encontrado para sua pesquisa :(' />
      </If>
      <If test={props.list.length}>
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
      </If>
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.todo.list,
  description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({toggleTodo, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = { description: 'Xitão', list: [] }
    this.refresh()
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      description: e.target.value
    })
  }

  refresh () {
    axios.get(`${URL}?sort=-createdAt`).then(
      ({data}) => this.setState({
        ...this.state,
        description: '',
        list: data
      })
    )
  }

  handleAdd () {
    const description = this.state.description
    axios.post(URL, { description }).then(
      () => this.refresh(),
      () => console.log('erro')
    )
  }

  handleRemove (item) {
    axios.delete(`${URL}/${item._id}`).then(
      () => this.refresh(),
      () => console.log('erro')
    )
  }

  handleMarkAsDone (item) {
    axios.put(`${URL}/${item._id}`, {...item, done: true}).then(
      () => this.refresh(),
      () => console.log('erro')
    )
  }

  handleMarkAsPending (item) {
    axios.put(`${URL}/${item._id}`, {...item, done: false}).then(
      () => this.refresh(),
      () => console.log('erro')
    )
  }

  render () {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm
          description={this.state.description}
          handleChange={(e) => this.handleChange(e)}
          handleAdd={() => this.handleAdd()} />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending} />
      </div>
    )
  }
}

export default Todo

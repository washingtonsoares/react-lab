import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clearDescriptionAndSearch } from './todoActions'

class TodoForm extends Component {
  keyHandler (e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.search(this.props.description) : this.props.add(this.props.description)
    } else if (e.key === 'Escape') {
      this.props.clearDescriptionAndSearch()
    }
  }

  componentWillMount () {
    this.props.search()
  }

  render () {
    const invalidDescription = !this.props.description
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description' className='form-control' placeholder='Adicione uma tarefa'
            onKeyUp={(e) => this.keyHandler(e)}
            onChange={this.props.changeDescription}
            value={this.props.description} />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' disabled={invalidDescription} onClick={() => this.props.add(this.props.description)} />
          <IconButton style='info' icon='search' onClick={() => this.props.search(this.props.description)} />
          <IconButton style='default' icon='close' disabled={invalidDescription} onClick={this.props.clearDescriptionAndSearch} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clearDescriptionAndSearch}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

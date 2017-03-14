import React, {Component} from 'react'

class Field extends Component {
  constructor (props) {
    super(props)
    this.state = { value: props.initialValue, count: 0 }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
  }

  render () {
    this.state.count++
    return (
      <div>
        <h1>Render count: {this.state.count} </h1>
        <label> {this.state.value} </label> <br />
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
      </div>
    )
  }
}

export default Field

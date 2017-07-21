import React, { PureComponent } from 'react'

const show = (Wrapper) => {
  class Show extends PureComponent {
    constructor () {
      super()
      this.state = { loading: true}
    }

    componentDidMount () {
      this.timer = setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 3000)
    }

    componentWillUnMount () {
      clearTimeout(this.timer)
    }

    render () {
      return (
        this.state.loading ? <div>loading ...</div> : (<Wrapper />)
      )
    }
  }

  return Show
}

export default show

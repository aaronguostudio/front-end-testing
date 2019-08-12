import React, { Component } from 'react';
// addUndoItem

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleKeyUp = (e) => {
    const { value } = this.state
    if (e.keyCode === 13 && value) {
      this.props.addUndoItem(value)
      this.setState({
        value: ''
      })
    }
  }

  render () {
    const { value } = this.state
    return (
      <div>
        <input
          data-test="input"
          value={value}
          onChange={this.handleInput}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    )
  }
}

export default Header

import React, { Component } from 'react'

const toggleButtonDecorator = (OriginalComponent) =>
  class ToggleButtonDecorator extends Component {
    state = {
      isOpen: false
    }

    onButtonClick = (statusToggle) => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          onButtonClick={this.onButtonClick}
          statusToggle={this.state.isOpen}
        />
      )
    }
  }

export default toggleButtonDecorator

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class IconButton extends Component {
  state = {
    clicked: false
  }


  // need to bring this from redux store
  handleClick = () => {
    this.setState({
      clicked: true
    })
  }
  render() {
    return (
      <div className='icon-button' onClick={this.handleClick}>
        <FontAwesomeIcon icon={this.props.icon} color={this.state.clicked ? 'black' : '#D4D4D4'} />
      </div>
    )
  }

  static propTypes = {
    // prop: PropTypes
    // color: PropTypes.string\
    icon: PropTypes.string.isRequired,
  }
}

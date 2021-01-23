import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class IconButton extends Component {


  render() {
    const { icon, handleScreenChange, screen } = this.props
    return (
      <div className='icon-button' onClick={() => handleScreenChange(icon)}>
        <FontAwesomeIcon size='lg' icon={icon} color={icon === screen ? 'black' : '#D4D4D4'} />
      </div>
    )
  }

  static propTypes = {
    icon: PropTypes.string.isRequired,
    handleScreenChange: PropTypes.func,
    screen: PropTypes.string
  }
}

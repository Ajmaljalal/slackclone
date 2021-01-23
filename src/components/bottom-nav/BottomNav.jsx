import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '../icon-button/IconButton'


export default class BottomNav extends Component {

  render() {
    const { screen, handleScreenChange } = this.props
    return (
      <div className='nav'>
        <IconButton icon='home' screen={screen} handleScreenChange={handleScreenChange}/>
        <IconButton icon='comment' screen={screen} handleScreenChange={handleScreenChange}/>
        <IconButton icon='cog' screen={screen} handleScreenChange={handleScreenChange}/>
      </div>
    )
  }

  static propTypes = {
    handleScreenChange: PropTypes.func,
    screen: PropTypes.string
  }

}

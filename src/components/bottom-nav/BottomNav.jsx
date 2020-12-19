import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import IconButton from '../icon-button/IconButton'


export default class BottomNav extends Component {

  render() {
    return (
      <div className='nav'>
        <IconButton icon='home' />
        <IconButton icon='comment' />
        <IconButton icon='cog' />
      </div>
    )
  }

  // static propTypes = {
  //   // prop: PropTypes
  // }

}

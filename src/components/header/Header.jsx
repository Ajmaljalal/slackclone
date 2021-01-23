import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from './../icon-button/IconButton';

export default class Header extends Component {



  renderIconOrTitle = () => {
    const { screen, handleScreenChange } = this.props;
    if(screen === 'home' || screen === 'comment' || screen === 'cog'){
      return (
        <div className='header__title'>رابطه</div>
      )
    } else return (
      <div className='header__icon'>
        <IconButton icon='angle-left' screen={'screen'} handleScreenChange={() => handleScreenChange('home')} />
      </div>
    )     
  }

  render() {
    return (
      <div className='header__w'>
        {this.renderIconOrTitle()}
      </div>
    )
  }

  static propTypes = {
    screen: PropTypes.string,
    handleScreenChange: PropTypes.func
  }
}



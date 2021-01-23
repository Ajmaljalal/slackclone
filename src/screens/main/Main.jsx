import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Home from './../home/Home';


export default class Main extends Component {

  render() {
    return (
      <div className='main-body'>
        <Home handleScreenChange={this.props.handleScreenChange} screen={this.props.screen} />
      </div>
    )
  }


  static propTypes = {
    handleScreenChange: PropTypes.func,
    screen: PropTypes.string
  }
}

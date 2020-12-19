import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Home from './../home/Home';


export default class Main extends Component {

  render() {
    return (
      <div className='main-body'>
        <Home />
      </div>
    )
  }


  static propTypes = {
    // prop: PropTypes
  }
}

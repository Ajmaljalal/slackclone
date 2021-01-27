import React, { Component } from 'react'
import PropTypes from 'prop-types'
const Home = React.lazy(() => import('./../home/Home'))


export default class Main extends Component {

  render() {
    return (
      <div className='main-body'>
        <React.Suspense fallback={<div />}>
          <Home handleScreenChange={this.props.handleScreenChange} screen={this.props.screen} />
        </React.Suspense>
      </div>
    )
  }


  static propTypes = {
    handleScreenChange: PropTypes.func,
    screen: PropTypes.string
  }
}

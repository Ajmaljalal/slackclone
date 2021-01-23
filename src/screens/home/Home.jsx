import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChatRoom from '../chatroom/ChatRoom'

const channels = [
  {
    name: 'عمومی',
    id: '34kjkfio543kl5jkljdf',
  },
  {
    name: 'halqa',
    id: 'dfewrewsdfvdsarfe53245',
  },
  {
    name: 'meetings',
    id: 'werfsdar2354dgsdfffsaasd',
  },
  // {
  //   name: 'Idari',
  //   id: 'sdfe3543565gfhfgsdaf',
  // },
  // {
  //   name: 'gap shap',
  //   id: 'asdffhgj576546',
  // }
]

const groups = [
  {
    name: 'karte 4',
    id: 'nmvbj75443sdfsdaf',
  },
  {
    name: 'printing',
    id: '678jhkghkjgfhdfgsd',
  },
  {
    name: 'nasharat',
    id: '3454356fdghrgsdfsdaf',
  },
  {
    name: 'bandar',
    id: '6547678thfdgsdfgasd',
  }
]

export default class Home extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    currentScreen: 'home',
    chatroomId: null
  }


  render() {
    return this.renderScreens()
  }

  openChatroom = (screen, id) => {
    const { handleScreenChange } = this.props
    handleScreenChange(screen)
    this.setState({
      chatroomId: id
    })
  }

  renderScreens = () => {
    const { screen } = this.props
    console.log(screen)
    switch (screen) {
      case 'home':
        return this.renderHomeScreen()
      case 'channel':
      case 'group':
        return <ChatRoom channelId={this.state.chatroomId} />
      default:
        return this.renderHomeScreen()
    }
  }


  renderHomeScreen = () => {
    return (
      <div className='home-w'>
        <div className='home__section-title'>چینلونه</div>
        {this.renderChannels()}
        <div className='home__section-title'>ګروپونه</div>
        {this.renderGroups()}
      </div>
    )
  }

  renderChannels = () => {
    return channels?.map((channel) => {
      return (
        <div key={channel.id} className='home__section__item' onClick={() => this.openChatroom('channel', channel.id)}>
          <div>{channel.name}</div>
          <div><FontAwesomeIcon icon='angle-left' color='black' /></div>
        </div>
      )
    })
  }

  renderGroups = () => {
    return groups?.map((group) => {
      return (
        <div key={group.id} className='home__section__item' onClick={() => this.openChatroom('group', group.id)}>
          <div>{group.name}</div>
          <div><FontAwesomeIcon icon='angle-left' color='black' /></div>
        </div>
      )
    })
  }
}

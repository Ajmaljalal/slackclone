
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const messages = [
  {
    id: 231412341234,
    text: 'This is a message by me',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '12:00'
  },
  {
    id: 231412341234,
    text: 'I am good thank you how about you',
    owner: 'Meena Alemi',
    ownerImage: 'https://picsum.photos/200',
    date: '5:00'
  },
  {
    id: 231412341234,
    text: 'مننه کور کې خیریت دی، زاړه واړه ټول ښه دي',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '4:30'
  },
  {
    id: 231412341234,
    text: 'Speak English Please, I dont know pashot',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '11:00'
  },
  {
    id: 231412341234,
    text: 'سمه ده',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '9:00'
  },
  {
    id: 231412341234,
    text: 'This is a message by me',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '12:00'
  },
  {
    id: 231412341234,
    text: 'I am good thank you how about you',
    owner: 'Meena Alemi',
    ownerImage: 'https://picsum.photos/200',
    date: '5:00'
  },
  {
    id: 231412341234,
    text: 'مننه کور کې خیریت دی، زاړه واړه ټول ښه دي',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '4:30'
  },
  {
    id: 231412341234,
    text: 'Speak English Please, I dont know pashot',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '11:00'
  },
  {
    id: 231412341234,
    text: 'سمه ده',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '9:00'
  },
  {
    id: 231412341234,
    text: 'This is a message by me',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '12:00'
  },
  {
    id: 231412341234,
    text: 'I am good thank you how about you',
    owner: 'Meena Alemi',
    ownerImage: 'https://picsum.photos/200',
    date: '5:00'
  },
  {
    id: 231412341234,
    text: 'مننه کور کې خیریت دی، زاړه واړه ټول ښه دي',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '4:30'
  },
  {
    id: 231412341234,
    text: 'Speak English Please, I dont know pashto. I can speak dari though. if you want I can tell you what to do',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '11:00'
  },
  {
    id: 231412341234,
    text: 'سمه ده',
    owner: 'Ajmal Jalal',
    ownerImage: 'https://picsum.photos/200',
    date: '9:00'
  },
]
export default class ChatRoom extends Component {
  messagesEndRef = React.createRef()


  componentDidMount() {
    this.scrollToBottom()
  }
  componentDidUpdate() {
    this.scrollToBottom()
  }
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }


  render() {
    return (
      <div className='chatroom__w'>
        {
          messages.map((msg, index) => {
            return (
              <div className='message__w' key={msg.id}>
                <div className='message__avatar'><img src={msg.ownerImage} alt='userAvatar'/></div>
                <div>
                  <div className='message__owner-date'>
                    <span className='message__owner'>{msg.owner}</span>
                    <span className='message__date'>{msg.date}</span>
                  </div>
                  <div className='message__text'>{msg.text}</div>
                </div>
              </div>
            )
          })
        }
        <div ref={this.messagesEndRef} />
        <div className='chatroom__textbox'>
          <textarea placeholder='څه ولیکئ...!'/>
        </div>
      </div>
    )
  }

  static propTypes = {
    channelId: PropTypes.string
  }
}

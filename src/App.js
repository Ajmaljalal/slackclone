
import React from 'react'
import BottomNav from './components/bottom-nav/BottomNav';
import Header from './components/header/Header';
import Main from './screens/main/Main';

class App extends React.Component {
  state = {
    screen: 'home'
  }

  handleScreenChange = (screen) => {
    this.setState({
      screen: screen
    })
  }
  render() {
    const { screen } = this.state
    return (
      <div className='main-container'>
        <Header screen={screen} handleScreenChange={this.handleScreenChange} />
        <Main screen={screen} handleScreenChange={this.handleScreenChange} />
        {
          screen === 'home' ||
            screen === 'comment' ||
            screen === 'cog' ?
            <BottomNav screen={screen} handleScreenChange={this.handleScreenChange} />
            : null
        }
      </div>
    );
  }
}


export default App;

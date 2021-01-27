
import React from 'react'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const BottomNav = React.lazy(() => import('./components/bottom-nav/BottomNav'))
const Header = React.lazy(() => import('./components/header/Header'))
const Main = React.lazy(() => import('./screens/main/Main'))
library.add(fas)
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
        <React.Suspense fallback={<div>wait...</div>}>
          <Header screen={screen} handleScreenChange={this.handleScreenChange} />
          <Main screen={screen} handleScreenChange={this.handleScreenChange} />
          {
            screen === 'home' ||
              screen === 'comment' ||
              screen === 'cog' ?
              <BottomNav screen={screen} handleScreenChange={this.handleScreenChange} />
              : null
          }
        </React.Suspense>
      </div>
    );
  }
}


export default App;

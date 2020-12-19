
import React from 'react'
import BottomNav from './components/bottom-nav/BottomNav';
import Header from './components/header/Header';
import Main from './screens/main/Main';




class App extends React.Component {
  render (){
    return (
      <div className='main-container'>
        <Header />
        <Main />
        <BottomNav />
      </div>
    );
  }
}


export default App;

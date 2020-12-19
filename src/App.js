
const messages = []
function App() {
  printMessages()
  return (
    <div className='main-container'>
      <div className='main-header'></div>
      <div className='main-body'>
        {
           messages?.map(message => {
            return (
              <div className='message-preview'>{message}</div>
            )
          })
        }
      </div>
      <div className='main-bottom-nav'></div>
    </div>
  );
}

const printMessages = () => {
  for (var i = 0; i < 15; i++) {
    messages.push('This is a message')
  }
  return 
}

export default App;

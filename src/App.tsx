import React from 'react';
import './App.css';
import Toast from './components/toast';
import logo from './logo.svg';

function App() {
  //to set open and close of toast component
  const [isOpen, setIsOpen] = React.useState(false);

  const onConfirm = (value: any) => {
    console.log(value)
  }

  const closeToast = (value: boolean) => {
    setIsOpen(value);
    console.log('User clicked CANCEL!')
  }
  return (
    <>
      <div className="App">
        <div className="homeContent">
          <div>
            <h1>Toast</h1>
            <p>Notification message or a piece of information displayed above the page content.</p>
          </div>
          <figure>
            <img src={logo} className="App-logo" alt="logo" />
          </figure>
        </div>

        {/* button to show toast */}
        <button className='btn-primary' onClick={() => { setIsOpen(true) }}>open toast</button>

        {/* toast component with three props */}
        <Toast
          onConfirm={onConfirm}
          isOpen={isOpen}
          closeToast={closeToast}
        />
      </div>

    </>
  );
}

export default App;

import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const alertFn=(message)=>{
    setAlert({msg:message});
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleModeFn = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'rgb(64, 72, 81)'
      alertFn('Dark Mode');
    } else {
      setMode('light');
      document.body.style.background = 'white';
      alertFn('Light Mode');
    }
  }

  return (
    <>
      <header>
        <Navbar title='Text Utils' about='About' mode={mode} toggleModeFn={toggleModeFn} />
        <Alert alert={alert} />      
      </header>
      <TextForm mode={mode} alert={alertFn} />
    </>

  );
}

export default App;

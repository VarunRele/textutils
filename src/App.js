import './App.css';
import About from './components/about';
import Navbar from './components/navbar'
import TextBox from './components/textbox'
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [mode, setMode] = useState('light')
  let [alert, setAlert] = useState(null)

  const toggleMode = () => {
    console.log("Toggle")
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(0,0,70)'
      showAlert('Dark mode is set', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is set', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar title="NavBar :)" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <Alert alert={alert} />
      
        <Routes>
            <Route exact path="/" element={<TextBox mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
      
    </div >
    </BrowserRouter>  
  );
}

export default App;

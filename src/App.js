import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'dark';
      showAlert("Dark Mode Enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <div style={{ backgroundColor: mode === 'dark' ? '#121212' : 'white' }}>
          <Navbar title="My TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <Routes>
            <Route path='/about' element={<About mode={mode} />}>
            </Route>
            <Route path='/' element={<TextForm showAlert={showAlert} mode={mode} heading="Enter Text" />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

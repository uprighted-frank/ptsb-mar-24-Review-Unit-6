import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Shop from './components/Shop'
import './App.css'

function App() {

  const [isLoggedIn, setLogin] = useState(false);

  function handleLogin (isLoggedIn) {
    setLogin(isLoggedIn);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header isLoggedIn={isLoggedIn} />}>
            <Route path='login' element={<Login handlerLogin={handleLogin} />} />
            <Route path='register' element={<Register />}/>
            <Route path='shop' element={<Shop  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

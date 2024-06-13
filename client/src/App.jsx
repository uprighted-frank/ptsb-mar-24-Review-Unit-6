import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

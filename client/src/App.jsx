import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Shop from './components/Shop'
import './App.css'
import AddIceCream from './components/AddIceCream'
import EditIceCream from './components/EditIceCream'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='login' element={<Login  />} />
            <Route path='register' element={<Register />}/>
            <Route path='shop' element={<Shop />}>
              <Route path='add' element={<AddIceCream />} />
              <Route path='edit/:id' element={<EditIceCream />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

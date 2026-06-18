import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import AuthLogin from './pages/AuthLogin'
import {Routes,Route, NavLink} from 'react-router-dom';


function App() {
   return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/auth/login" element={<AuthLogin/>}></Route>
     </Routes>
    </>
  )
}

export default App

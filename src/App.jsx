import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom';

function App() {
   return (
    <>
     <Home/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
    </>
  )
}

export default App

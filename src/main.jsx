import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {CartProvider} from './contexts/cart-context'
import {BrowserRouter} from 'react-router';
import {LoginProvider} from './contexts/login-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartProvider> 
      <LoginProvider> <App /></LoginProvider>
     
    </CartProvider>
    </BrowserRouter>
   
  
  </StrictMode>,
)

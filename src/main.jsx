// React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import App from './App.jsx'

// Styles
import './index.css'

// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

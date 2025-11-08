import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Style.css'        // <-- IMPORTANT: import global CSS here (no variable)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

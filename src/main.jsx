import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

/* 
What is BrowserRouter used for?
  It enables navigation between views from different components in a React application, 
    allows the browser URL to be changed, 
    and keeps the UI in sync with the URL. 
*/
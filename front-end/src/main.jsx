import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
) 
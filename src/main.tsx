import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Trading from './Trading/Trading.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App/>} />
      <Route path='/' element={<App/>} />
      <Route path='/trading' element={<Trading/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

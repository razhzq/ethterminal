import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Trading from './Trading/Trading.tsx'


import './App.css'
import Navbar from './Navbar';
import Dashboard from './Dashboard';



function App() {


  return (
    
    <div className=''>
      <div className="min-h-screen w-screen flex flex-col text-blackNight bg-cardinGreen">
        <div className=' flex text-honeyDew'>
         {/* // dashboard functions */}
         <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/trading' element={<Trading />} />
            
         </Routes>
         </BrowserRouter>
         
        </div>


      </div>
     
    </div>
    
  )
}

export default App

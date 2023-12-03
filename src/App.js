import React from 'react';
import './style.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import History from './components/History'
import {Routes, Route} from 'react-router-dom'

const App = () =>{
  return (
    <div>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/history" element = {<History/>} />
      </Routes>
      
    </div>
  );
}

export default App

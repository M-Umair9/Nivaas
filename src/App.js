import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/home';
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path='/Signin' element={<Signin />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

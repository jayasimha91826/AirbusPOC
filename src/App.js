import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'; // Assuming NavBar is in the same directory
import Home from './Home'; // Home component
import Cart from './Cart';

function App() {
  
  // console.log(data);
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}


export default App;

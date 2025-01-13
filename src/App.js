import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar.js'; // Assuming NavBar is in the same directory
import Home from './Components/Home.js'; // Home component
import Cart from './Components/Cart.js';
import { Divider, Grid2 } from '@mui/material';
import SideBar from './Components/SideBar.js';

function App() {

  // console.log(data);

  return (
    <>
      <NavBar />
      <Grid2 container direction="row" padding={"10px"} columnGap={1}>
        <Grid2 item size={{ xs: 6, md: 4 }}>
          <SideBar/>
        </Grid2>
        <Grid2>
          <Divider orientation='vertical'/>
        </Grid2>
        <Grid2 item size={{ xs: 6, md: 7 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Grid2>
      </Grid2>
    </>
  );
}


export default App;

import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar.js'; // Assuming NavBar is in the same directory
import Home from './Home'; // Home component
import Cart from './Cart.js';
import { Grid2 } from '@mui/material';
import SideBar from './SideBar.js';

function App() {

  // console.log(data);

  return (
    <>
      <NavBar />
      <Grid2 container direction="row" padding={"10px"}>
        <Grid2 item width="25vw">
          <SideBar/>
        </Grid2>
        {/* <Grid2 item width="70vw"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Grid2>
      {/* </Grid2> */}
    </>
  );
}


export default App;

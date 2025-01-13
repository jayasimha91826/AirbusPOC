import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar.js'; // Assuming NavBar is in the same directory
import Home from './Components/Home.js'; // Home component
import Cart from './Components/Cart.js';
import { Divider, Grid2 } from '@mui/material';
import SideBar from './Components/SideBar.js';
import { useSelector } from 'react-redux';
import Loader from './Components/Loader.js';

function App() {
  const isLoading = useSelector((state) =>state.product.isLoading)

  return (
    <>
      <NavBar />
      {isLoading && <Loader open={isLoading}/>}
      <Grid2 container direction="row" padding={"10px"} columnGap={1} className="content">
        <Grid2 item size={{ xs: 6, md: 3 }}>
          <SideBar/>
        </Grid2>
        <Grid2>
          <Divider orientation='vertical'/>
        </Grid2>
        <Grid2 item size={{ xs: 6, md: 8 }}>
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

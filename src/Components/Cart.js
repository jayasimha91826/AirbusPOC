// Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid2 } from '@mui/material';
import ProductCard from './ProductCard';

function Cart() {
    const cartItems=useSelector((state)=>state.product.searchedCartItems)
  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <p>Items in the cart will appear here.</p>
      <Grid2 container columnGap={2} rowGap={2} justifyContent={"center"}>
            {/* <h2>Welcome to the Home Page</h2> */}
            {(cartItems?.length > 0) && (cartItems.map((i, index) => (
                <Grid2 item key={index}>  <ProductCard cardData={i} /></Grid2> // Use a key prop when mapping lists 
            )))}
        </Grid2>
    </div>
  );
}

export default Cart;

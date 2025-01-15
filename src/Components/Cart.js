import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid2 } from '@mui/material';
import { updateCartQuantity } from '../redux/slice';
import ProductCard from './ProductCard';

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cartITems);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, change) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      dispatch(updateCartQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <Grid2 container columnGap={2} rowGap={2} justifyContent="center">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Grid2 item key={item.id}>  <ProductCard cardData={item} /></Grid2>
            // <Grid2 item key={item.id}>
            //   <div>
            //     <h3>{item.pdtName}</h3>
            //     <p>Price: ${item.pdtPrice}</p>
            //     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            //       <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            //       <span>{item.quantity}</span>
            //       <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            //     </div>
            //   </div>
            // </Grid2>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Grid2>
    </div>
  );
}

export default Cart;

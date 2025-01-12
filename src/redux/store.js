// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

export default store;

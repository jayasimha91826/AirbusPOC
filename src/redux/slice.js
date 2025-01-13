import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartCount: 0,
  cartITems: [],
  searchedProducts: [],
  searchedCartItems: [],
  colors: [],
  brands: [],
  types: [],
  brandFilterKeys: [],
  typeFilterKeys: [],
  colorFilterKeys: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.searchedProducts = action.payload;
      state.colors = Array.from(
        new Set(action.payload.map((item) => item.color))
      );
      state.brands = Array.from(
        new Set(action.payload.map((item) => item.pdtCategory))
      );
      state.types = Array.from(
        new Set(action.payload.map((item) => item.pdtType))
      );
    },
    setBrandFilter: (state, action) => {
      state.brandFilterKeys = action.payload;
    },
    setTypeFilter: (state, action) => {
      state.typeFilterKeys = action.payload;
    },
    setColorFilter: (state, action) => {
      state.colorFilterKeys = action.payload;
    },
    cartITemsFilter: (state, action) => {
      state.searchedCartItems = state.cartITems.filter((item) =>
        item.pdtName.toLowerCase().includes(action.payload)
      );
    },
    searchedProducts: (state, action) => {
        debugger
      state.searchedProducts = state.products.filter((item) =>
        item.pdtName.toLowerCase().includes(action.payload)
      );
    },
    clearCartItems: (state, action) => {
      state.cartITems = state.cartITems.filter(
        (item) => item.id !== action.payload
      );
      state.searchedCartItems = state.cartITems.filter(
        (item) => item.id !== action.payload
      );
      state.cartCount = state.cartCount - 1;
    },
    setCartCount: (state, action) => {
      if (state.cartITems.length > 0) {
        let flag = 0;
        for (let i of state.cartITems) {
          if (i.id === action.payload.id) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          state.cartCount = state.cartCount + 1;
          state.cartITems = [...state.cartITems, action.payload];
          state.searchedCartItems = [
            ...state.searchedCartItems,
            action.payload,
          ];
        }
      } else {
        state.cartITems = [action.payload];
        state.searchedCartItems = [action.payload];
        state.cartCount = state.cartCount + 1;
      }
    },
  },
});

export const {
  setProducts,
  clearCartItems,
  setCartCount,
  searchedProducts,
  cartITemsFilter,
  setBrandFilter,
  setColorFilter,
  setTypeFilter,
} = productSlice.actions;

export default productSlice.reducer;

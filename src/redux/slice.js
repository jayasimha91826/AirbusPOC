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
  searchKey:'',
  isLoading:false,
  isFiltersCleared:false
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setIsLoading:(state,action) => {
      state.isLoading = action.payload
    },
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
      if (action.payload.isChecked) {
        state.brandFilterKeys = [...state.brandFilterKeys, action.payload.value];
      } else {
        state.brandFilterKeys = state.brandFilterKeys.filter((item) => item!==action.payload.value);
      }
    },
    setTypeFilter: (state, action) => {
      if (action.payload.isChecked) {
        state.typeFilterKeys = [...state.typeFilterKeys, action.payload.value];
      } else {
        state.typeFilterKeys = state.typeFilterKeys.filter((item) => item!==action.payload.value);
      }
    },
    setColorFilter: (state, action) => {
      state.colorFilterKeys = [...state.colorFilterKeys, action.payload];
    },
    cartItemsFilter: (state, action) => {
      state.searchedCartItems = state.cartITems.filter((item) =>
        item.pdtName.toLowerCase().includes(action.payload)
      );
    },
    searchedProducts: (state, action) => {
      if (state.colorFilterKeys.length > 0) {
        const isColorPresent = state.colorFilterKeys.find(
          (item) => item === action.payload
        );
        state.searchedProducts = state.products.filter(
          (item) => item.color === isColorPresent
        );
      } else if (state.brandFilterKeys.length > 0) {
        const isBrandPresent = state.brandFilterKeys.find(
          (item) => item === action.payload
        );
        state.searchedProducts = state.products.filter((item) =>  item.pdtCategory === isBrandPresent
        );
      } else if (state.typeFilterKeys.length > 0) {
        const isTypePresent = state.typeFilterKeys.find(
          (item) => item === action.payload
        );
        debugger
        state.searchedProducts = state.products.filter((item) => {
          return item.pdtType === isTypePresent;
        });
      } else if (
        state.colorFilterKeys.length > 0 &&
        state.brandFilterKeys.length > 0 &&
        state.typeFilterKeys.length > 0
      ) {
        const isColorPresent = state.colorFilterKeys.find(
          (item) => item.color === action.payload
        );
        const isBrandPresent = state.brandFilterKeys.find(
          (item) => item === action.payload
        );
        const isTypePresent = state.typeFilterKeys.find(
          (item) => item === action.payload
        );
        state.searchedProducts = state.products.filter((item) => {
          return (
            item.pdtType === isTypePresent &&
            item.pdtCategory === isBrandPresent &&
            item.color === isColorPresent
          );
        });
      } else if(state.searchKey !== "") {
        state.searchedProducts = state.products.filter((item) =>
          item.pdtName.toLowerCase().includes(action.payload)
        );
      }
      else{
        state.searchedProducts = state.products
      }
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
    clearFilterOptions : (state) => {
      state.colorFilterKeys = [];
      state.brandFilterKeys=[];
      state.typeFilterKeys=[];
      state.searchedProducts=state.products
      state.isFiltersCleared=true
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
  setIsLoading,
  setProducts,
  clearCartItems,
  setCartCount,
  searchedProducts,
  cartItemsFilter,
  setBrandFilter,
  setColorFilter,
  setTypeFilter,
  clearFilterOptions
} = productSlice.actions;

export default productSlice.reducer;

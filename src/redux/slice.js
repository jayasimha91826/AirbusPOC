
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cartCount: 0,
    cartITems: [],
    searchedProducts: [],
    searchedCartItems: [],
    

};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.searchedProducts = action.payload;
        },
        
        cartITemsFilter: (state, action) => {
            state.searchedCartItems = state.cartITems.filter((item) => item.pdtName.toLowerCase().includes(action.payload))
        },
        searchedProducts: (state, action) => {
            state.searchedProducts = state.products.filter((item) => item.pdtName.toLowerCase().includes(action.payload))

        },
        setCartCount: (state, action) => {

            // debugger
            if (state.cartITems.length > 0) {
                // debugger
                let flag = 0;


                for (let i of state.cartITems) {
                    // debugger

                    if (i.id === action.payload.id) {
                        // console.log("doubetime");
                        flag = 1
                        break
                        // debugger

                    }
                }
                if (flag === 0) {
                    state.cartCount = state.cartCount + 1;
                    state.cartITems = [...state.cartITems, action.payload]
                    state.searchedCartItems=[...state.searchedCartItems,action.payload]
                }
            }
            else {
                // debugger
                state.cartITems = [action.payload]
                state.searchedCartItems=[action.payload]
                state.cartCount = state.cartCount + 1;
            }
        },
    },
});

export const { setProducts,  setCartCount, searchedProducts , cartITemsFilter} = productSlice.actions;

export default productSlice.reducer;

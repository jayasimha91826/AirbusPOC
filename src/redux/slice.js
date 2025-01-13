
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cartCount: 0,
    cartITems: [],
    searchedProducts: [],
    searchedCartItems: [],
    colors:[]
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.searchedProducts = action.payload;
            state.colors=Array.from(new Set(action.payload.map((item) => item.color)))
        },
        
        cartITemsFilter: (state, action) => {
            state.searchedCartItems = state.cartITems.filter((item) => item.pdtName.toLowerCase().includes(action.payload))
        },
        searchedProducts: (state, action) => {
            state.searchedProducts = state.products.filter((item) => item.pdtName.toLowerCase().includes(action.payload))

        },
        clearCartItems:(state,action)=>{
            debugger
            state.cartITems=state.cartITems.filter((item)=>item.id!==action.payload)
            state.searchedCartItems=state.cartITems.filter((item)=>item.id!==action.payload)
            state.cartCount=state.cartCount-1
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

export const { setProducts, clearCartItems, setCartCount, searchedProducts , cartITemsFilter} = productSlice.actions;

export default productSlice.reducer;

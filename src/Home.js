import React, { useState, useEffect } from "react";
import { getProductData } from './services/service';
import Card from "./ProductCard";
import ProductCard from "./ProductCard";
import { Grid2 } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/slice";

function Home() {
    // Initialize state with the productData prop
    //   const [productData, setProductData] = useS/tate([]);
    // console.log(productData);
    const [data, setData] = useState([])
    const searchedData = useSelector((state) => state.product.searchedProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            getProductData().then((response) => {
                const data = response;
                setData(data)
                dispatch(setProducts(data))
                //console.log(data)
            }).catch((error) => {
                console.error(error)
            });
        })()
    }, [])
    // console.log(data);

    return (
        <Grid2 container columnGap={2} rowGap={2} justifyContent={"center"}>
            {/* <h2>Welcome to the Home Page</h2> */}
            {(searchedData.length > 0) && (searchedData.map((i, index) => (
                <Grid2 item key={index}>  <ProductCard cardData={i} /></Grid2> // Use a key prop when mapping lists 
            )))}
        </Grid2>
    );
}

export default Home;

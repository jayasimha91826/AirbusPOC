import React, { useState, useEffect } from "react";
import { getProductData } from "../services/service";
import Card from "./ProductCard";
import ProductCard from "./ProductCard";
import { Grid2, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setProducts } from "../redux/slice";

function Home() {
  const [data, setData] = useState([]);
  const searchedData = useSelector((state) => state.product.searchedProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(true));
    (async () => {
      getProductData()
        .then((response) => {
          const data = response;
          setData(data);
          dispatch(setProducts(data));
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  }, []);

  return (
    <Grid2
      container
      columnGap={2}
      rowGap={2}
      justifyContent={"center"}
      sx={{ overflowY: "auto !important" }}
    >
      {searchedData.length > 0 ? (
        searchedData.map((i, index) => (
          <Grid2 item key={index} size={{ xs: 12, md: 2.8 }}>
            {" "}
            <ProductCard cardData={i} />
          </Grid2>
        ))
      ) : (
        <Typography>
          Uh-oh, no products present in the filtered Combination. Please try
          filter with valid Combination
        </Typography>
      )}
    </Grid2>
  );
}

export default Home;

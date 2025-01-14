import { Button, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterOptions from "./FilterOptions";
import {
  clearFilterOptions,
  searchedProducts,
  setBrandFilter,
  setColorFilter,
  setTypeFilter,
} from "../redux/slice";

const SideBar = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const dispatch = useDispatch();
  const colours = useSelector((state) => state.product.colors);
  const brands = useSelector((state) => state.product.brands);
  const types = useSelector((state) => state.product.types);
  const isFiltersCleared = useSelector(
    (state) => state.product.isFiltersCleared
  );

  const handleColorChange = (event, item) => {
    setSelectedColor(item);
    dispatch(setColorFilter(item));
    dispatch(searchedProducts(item));
    dispatch(clearFilterOptions());
  };

  const handleClearFilter = () => {
    dispatch(clearFilterOptions());
  };

  useEffect(() => {
    if (isFiltersCleared) {
      setSelectedColor("");
    }
  }, [isFiltersCleared]);
  return (
    <Grid2 container direction="column" rowGap={2} paddingLeft={2}>
      <Grid2 item>
        <Typography>FILTERS</Typography>
      </Grid2>
      <Grid2 item>
        <Typography>COLORS</Typography>
      </Grid2>
      <Grid2
        item
        container
        direction="row"
        width="90%"
        style={{ display: "flex", gap: "8px" }}
      >
        <Grid2 item display="flex" rowGap={1} columnGap={1} flexWrap="wrap">
          {colours.map((item, index) => (
            <div
              key={index}
              onClick={(event) => handleColorChange(event, item)}
              style={{
                backgroundColor: item,
                width: "25px",
                height: "25px",
                borderRadius: "6px",
                border:
                  selectedColor === item && !isFiltersCleared
                    ? "3px #1976d2 solid"
                    : "1px black solid",
              }}
            >
              {" "}
            </div>
          ))}
        </Grid2>
      </Grid2>
      <Grid2
        item
        container
        justifyContent="space-between"
        width="90%"
        alignItems="center"
      >
        <Grid2 item>
          {" "}
          <Typography>BRAND</Typography>
        </Grid2>
        <Grid2 item>
          <Button onClick={handleClearFilter}>Clear All</Button>
        </Grid2>
      </Grid2>
      <Grid2 border="1px black solid" borderRadius="10px" width="90%">
        <FilterOptions data={brands} isType={false} />
      </Grid2>
      <Grid2 item>
        {" "}
        <Typography>TYPE</Typography>
      </Grid2>
      <Grid2 border="1px black solid" borderRadius="10px" width="90%">
        <FilterOptions data={types} isType={true} />
      </Grid2>
    </Grid2>
  );
};

export default SideBar;

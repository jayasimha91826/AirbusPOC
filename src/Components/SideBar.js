import { Button, Grid2, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterOptions from "./FilterOptions";
import { setColorFilter } from "../redux/slice";

const SideBar = () => {
  const dispatch = useDispatch();
  const colours = useSelector((state) => state.product.colors);
  const brands = useSelector((state) => state.product.brands);
  const types = useSelector((state) => state.product.types);

  const handleColorChange = (event, item) => {
    dispatch(setColorFilter(item));
    
  };
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
                border: "1px black solid",
              }}
            ></div>
          ))}
        </Grid2>
      </Grid2>
      <Grid2 item container justifyContent="space-between" width="90%">
        <Grid2 item>
          {" "}
          <Typography>BRAND</Typography>
        </Grid2>
        <Grid2 item>
          <Button>Clear All</Button>
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

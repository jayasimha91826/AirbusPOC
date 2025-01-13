import { Grid2, Radio, Typography } from "@mui/material";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { searchedProducts, setBrandFilter, setTypeFilter } from "../redux/slice";

const FilterOptions = ({ data, isType }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (isType) {
      dispatch(setTypeFilter(event.target.value));
    } else {
      dispatch(setBrandFilter(event.target.value));
    }
    dispatch(searchedProducts(event.target.value))
  };

  return (
    <Grid2
      container
      direction="column"
      height="30vh"
      overflow="auto"
      width="28vw"
      flexWrap="nowrap"
      padding={1}
    >
      {data.map((item, index) => (
        <Grid2 item container justifyContent="space-between" width="100%">
          <Grid2 item>
            <Typography>{item}</Typography>
          </Grid2>
          <Grid2 item>
            {" "}
            <FormControlLabel
              //   required
              control={
                isType ? (
                  <Radio onClick={handleChange} value={item} />
                ) : (
                  <Checkbox onClick={handleChange} value={item} />
                )
              }
              //   label="Required"
            />
          </Grid2>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default FilterOptions;

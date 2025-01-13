import { Grid2, Radio, Typography } from "@mui/material";
import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  searchedProducts,
  setBrandFilter,
  setTypeFilter,
} from "../redux/slice";

const FilterOptions = ({ data, isType }) => {
  const [selectedType, setSelectedType] = useState("");
  const isFiltersCleared = useSelector((state) => state.product.isFiltersCleared)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (isType) {
      if (selectedType === event.target.value) {
        debugger;
        setSelectedType(null);
        dispatch(
            setTypeFilter({
              value: event.target.value,
              isChecked: false,
            })
          );
      } else {
        debugger;
        setSelectedType(event.target.value);
        dispatch(
            setTypeFilter({
              value: event.target.value,
              isChecked: true,
            })
          );
      }
    } else {
      dispatch(
        setBrandFilter({
          value: event.target.value,
          isChecked: event.target.checked,
        })
      );
    }
    dispatch(searchedProducts(event.target.value));
  };

  return (
    <Grid2
      container
      direction="column"
      height="30vh"
      overflow="auto"
      width="20.5vw"
      flexWrap="nowrap"
      padding={1}
    >
      {data.map((item, index) => (
        <Grid2
          item
          container
          justifyContent="space-between"
          width="100%"
          key={index}
        >
          <Grid2 item>
            <Typography>{item}</Typography>
          </Grid2>
          <Grid2 item>
            {" "}
            <FormControlLabel
              control={
                isType ? (
                  <Radio
                    onClick={handleChange}
                    value={item}
                    checked={isType ? selectedType === item : isFiltersCleared && false}
                  />
                ) : (
                  <Checkbox onClick={handleChange} value={item} />
                )
              }
            />
          </Grid2>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default FilterOptions;

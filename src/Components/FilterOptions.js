import { Grid2, Radio, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
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
  const [selectedBrands, setSelectedBrands] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const isFiltersCleared = useSelector(
    (state) => state.product.isFiltersCleared
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (isType) {
      if (selectedType === event.target.value) {
        setSelectedType(null);
        dispatch(
          setTypeFilter({
            value: event.target.value,
            isChecked: false,
          })
        );
      } else {
        setSelectedType(event.target.value);
        dispatch(
          setTypeFilter({
            value: event.target.value,
            isChecked: true,
          })
        );
      }
      setCheckedItems((prev) => ({
        ...prev,
        [event.target.value]: event.target.checked,
      }));
    } else {
      dispatch(
        setBrandFilter({
          value: event.target.value,
          isChecked: event.target.checked,
        })
      );
      setSelectedBrands((prev) => ({
        ...prev,
        [event.target.value]: event.target.checked,
      }));
    }
    dispatch(searchedProducts(event.target.value));
  };

  useEffect(() => {
    if (isFiltersCleared) {
      // Reset all checkboxes when filters are cleared
      setCheckedItems({});
      setSelectedBrands({})
    }
  }, [isFiltersCleared]);

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
                    onChange={handleChange}
                    value={item}
                    checked={
                       checkedItems[item] || false
                    }
                  />
                ) : (
                  <Checkbox onChange={handleChange} value={item} 
                  checked={selectedBrands[item] || false}
                  //  checked={
                  //   !isFiltersCleared
                  // }
                  />
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

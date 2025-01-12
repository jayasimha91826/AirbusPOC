// NavBar.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartITemsFilter, searchedProducts } from "./redux/slice";
// import ProductCard from "./ProductCard";

export default function NavBar() {
//   const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch=useDispatch()
  const navigate = useNavigate();
    const cartCount=useSelector((state)=>state.product.cartCount)
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    if(window.location.href.includes("cart")){
        dispatch(cartITemsFilter(event.target.value))
    }
    else
    dispatch(searchedProducts(event.target.value));
  };

  

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Home Button using Link for navigation */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
        </Typography>

        {/* Search Box */}
        <Box sx={{ mx: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          />
        </Box>

        {/* Cart Icon with Badge */}
        <IconButton
          color="inherit"
          onClick={() => navigate("/cart")}
          aria-label="cart"
        >
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        
      </Toolbar>
    </AppBar>
  );
}

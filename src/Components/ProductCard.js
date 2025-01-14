import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button, Grid2 } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearCartItems, setCartCount } from "../redux/slice";
import cancel from "../assets/cancel.svg";
import { IconButton } from "@mui/material";
import ProductView from "./ProductView";
const ProductCard = ({ cardData }) => {
  const [preview, setPreview] = React.useState(false);
  const dispatch = useDispatch();

  const handleCancel = (event, cardId) => {
    dispatch(clearCartItems(cardId));
  };

  const handleAddToCart = (event, cardData) => {
    dispatch(setCartCount(cardData));
  };

  const handlePreviewClose = (val) => {
    setPreview(val);
  };
  const handlePreview = () => {
    setPreview(!preview);
  };
  return (
    <>
      <Card onClick={handlePreview}>
        <CardActionArea>
          <div className="color-div">{cardData.color}</div>
          {window.location.href.includes("cart") && (
            <IconButton
              aria-label="cancel"
              onClick={(event) => handleCancel(event, cardData.id)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 1,
                color: "black",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "grey.200",
                },
              }}
            >
              {<img src={cancel}></img>}
            </IconButton>
          )}
          <CardMedia
            component="img"
            height="140"
            image={cardData.pdtImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={cardData.pdtName.length > 15 ? "truncate" : ""}
              textAlign="center"
            >
              {cardData.pdtName}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
              className={cardData.pdtName.length > 15 ? "truncate" : ""}
            >
              {cardData.pdtCategory}
            </Typography>
            <Grid2 container alignItems="center" justifyContent="space-between">
              <Grid2 item>
                <Typography>{`$ ${cardData.pdtPrice}`}</Typography>
              </Grid2>
              <Grid2 item>
                <Button
                  className="add-button"
                  onClick={(event) => handleAddToCart(event, cardData)}
                >
                  Add to Cart
                </Button>
              </Grid2>
            </Grid2>
          </CardContent>
        </CardActionArea>
      </Card>
      {preview && (
        <ProductView
          open={preview}
          data={cardData}
          close={handlePreviewClose}
        />
      )}
    </>
  );
};

export default ProductCard;

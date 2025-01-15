import {
  Modal,
  Card,
  Grid2,
  CardMedia,
  Typography,
  Button,
  IconButton,
  CardActionArea,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setCartCount } from "../redux/slice";
import cancel from "../assets/cancel.svg";

const ProductView = ({ open, data, close }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = (event, data) => {
    dispatch(setCartCount(data));
    close(false)
  };

  const handleCancel = () => {
    close(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleCancel}
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        // width:'20vw'
      }}
    >
      <Card sx={{ width: "28vw", padding: "20px" }}>
        <CardActionArea>
          {" "}
          <IconButton
            aria-label="cancel"
            onClick={(event) => handleCancel(event)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              color: "black",
            }}
          >
            {<img src={cancel}></img>}
          </IconButton>
        </CardActionArea>
        <Grid2 container direction="column" rowGap={2}>
          <Grid2 item container columnGap={3}>
            <Grid2 item>
              <CardMedia
                component="img"
                height="140"
                image={data.pdtImg}
                alt="green iguana"
              />
            </Grid2>
            <Grid2 item container direction="column" rowGap={1}>
              <Grid2 item>
                {" "}
                <Typography>{data.pdtName}</Typography>
              </Grid2>
              <Grid2 item>
                {" "}
                <Typography>{data.pdtCategory}</Typography>
              </Grid2>
              <Grid2 item>
                <Typography>{`$ ${data.pdtPrice}`}</Typography>
              </Grid2>
              <Grid2 item container columnGap={2}>
                <div
                  style={{
                    backgroundColor: data.color,
                    width: "25px",
                    height: "25px",
                    borderRadius: "6px",
                    border: "1px black solid",
                  }}
                ></div>
                <Typography textTransform="capitalize">{data.color}</Typography>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2
            item
            container
            columnGap={4}
            sx={{ backgroundColor: "#B0C4DE", padding: "10px" }}
          >
            <Typography sx={{color:'#d1007e'}}>Description</Typography>
            <Typography>Reviews</Typography>
          </Grid2>
          <Grid2 item>
            <Typography>{data.pdtDescription}</Typography>
          </Grid2>
          <Grid2 item>
            <Typography>UID : {data.pdtUID}</Typography>
          </Grid2>
          <Grid2 item>
            <Typography>Code : {data.pdtCode}</Typography>
          </Grid2>
          <Grid2 item>
            <Typography>Type : {data.pdtType}</Typography>
          </Grid2>
          <Grid2 item>
            <Button
              sx={{
                backgroundColor: "#002244",
                color: "white",
                width: "100%",
                textAlign: "center",
                textTransform: "capitalize",
              }}
              //   className="add-button"
              onClick={(event) => handleAddToCart(event, data)}
            >
              Add to Cart
            </Button>
          </Grid2>
        </Grid2>
      </Card>
    </Modal>
  );
};

export default ProductView;

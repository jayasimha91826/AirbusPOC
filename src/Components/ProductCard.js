import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { clearCartItems, setCartCount } from '../redux/slice';
import cancel from "../assets/cancel.svg"
import {IconButton} from '@mui/material';
const ProductCard = ({ cardData }) => {
  const dispatch = useDispatch()
  // console.log("carddata",cardData);
  const handleCancel=(event,cardId)=>{
    debugger
    dispatch(clearCartItems(cardId))

  }

  const handleAddToCart = (event, cardData) => {
    debugger
    dispatch(setCartCount(cardData))

    // console.log("onclick", cardData);

  }
  // ==============================================
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {window.location.href.includes("cart") && <IconButton
          aria-label="cancel"
          onClick={(event)=>handleCancel(event,cardData.id)}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            color: 'black',
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'grey.200',
            },
            
          }}>{<img src={cancel}></img>}</IconButton>}
        <CardMedia
          component="img"
          height="140"
          image={cardData.pdtImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardData.pdtName}
          </Typography>
          <Button onClick={(event) => handleAddToCart(event, cardData)}>AddtoCart</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;

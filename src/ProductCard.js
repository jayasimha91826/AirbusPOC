import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCartCount } from './redux/slice';
const ProductCard = ({ cardData }) => {
const dispatch=useDispatch()
// console.log("carddata",cardData);

const handleAddToCart=(event,cardData)=>{
  debugger
  dispatch(setCartCount(cardData))
  
  // console.log("onclick", cardData);
  
}
// ==============================================
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
          <Button onClick={(event)=>handleAddToCart(event,cardData)}>AddtoCart</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;

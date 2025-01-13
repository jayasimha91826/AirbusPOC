import React from 'react';
import { Backdrop,CircularProgress,Typography } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));

const  Loader = ({open}) => {

  return (
   <Backdrop open={open}>
    <CircularProgress color='#d1007e !important' size="5rem"/>
   </Backdrop>
  );
}

export default Loader

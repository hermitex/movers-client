import { Card, CardActions, CardMedia, IconButton } from '@mui/material'
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

function SingleItemCard() {
  return (
    <Card
        sx={{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
    >
        <CardMedia
            component="img"
            height="100"            
            image="https://images.pexels.com/photos/4246211/pexels-photo-4246211.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Paella dish"
        />      
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>            
        </CardActions>
    </Card>
  )
}

export default SingleItemCard
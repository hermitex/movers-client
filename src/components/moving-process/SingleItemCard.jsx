import { Button, ButtonGroup, Card, CardActions, CardMedia, IconButton } from '@mui/material'
import React, { useState } from 'react';


function SingleItemCard() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

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
        <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
            <Button size="small" variant='outlined' onClick={handleIncrement}>{count}</Button>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button onClick={handleDecrement}>-</Button>
                <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup>           
        </CardActions>
    </Card>
  )
}

export default SingleItemCard
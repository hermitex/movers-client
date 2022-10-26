import { IconButton, Card, CardHeader, Typography, CardContent, Divider, Button } from '@mui/material'
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/system';

function CompareFeedCard() {
  return (
    <Card
        sx={{
            maxWidth: "auto"
        }}
    >
        <CardHeader
            
            avatar={
              <IconButton sx={{ bgcolor: "white" }} size="large">
                <AccountCircleIcon />
              </IconButton>
            }
            action={
              <Typography 
                variant="p"
                sx={{
                    fontWeight: "bolder",
                    fontSize: "20px",
                    textDecoration: "underline",
                }}
              >
                Price Quote
              </Typography>
            }
            titleTypographyProps={{ variant: "p", fontSize: "18px", fontWeight: "bold" }}
            title="Pyramid Movers"
            subheader="Moving you forward"
        />    
        <CardContent
            sx={{
                display: "flex",
                flexDirection: "row",
                padding: "10px 20px",
                gap: 5,
                alignItems: "center"
            }}
        >
            <Box sx={{ flex: 2 }} >
                <Typography variant="body2" color="text.secondary">
                  Riruta, Nairobi County <br />
                  Years in business: 5 <br />
                  Mooves: 10 
                </Typography>
            </Box>
            <Box sx={{ flex: 1.2, display: "flex", flexFlow: "column", alignContent: "center" }}>
                <Divider />
                <Button color="error">
                    KES 4,999.00
                </Button>
                <Divider />
            </Box>
        </CardContent>  
        <CardContent
            sx={{
                display: "flex",
                flexDirection: "row",                
                justifyContent: "space-between",                
                gap: 5,
                alignItems: "center"
            }}
        >
        <Box 
            sx={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "left",
                alignItems: "baseline",
                gap: 2
            }}
        >
            <Button
                variant="outlined"               
                size="small"                               
                color="error"            
                style={{                                    
                    fontSize: "18px"
                }}                    
            >
                15
            </Button>  
            <Typography variant="p" fontWeight="bold" >
                Reviews
            </Typography> 
        </Box> 
        <Box>
            <Button
                variant="contained"               
                size="small"                               
                color="error"            
                style={{  
                    width: "140px",                                
                    fontSize: "18px"
                }}                    
            >
                SELECT
            </Button> 
        </Box>
        </CardContent>      
    </Card>
  )
}

export default CompareFeedCard
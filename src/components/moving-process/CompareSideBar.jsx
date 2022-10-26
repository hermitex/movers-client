import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


function CompareSideBar() {
  return (
    <Box
        sx={{
            display: "flex",
            flexFlow: "column",
            flex: 2, 
            padding: "20px 0px",
            gap: 5
        }}
    >
        <Box 
            sx={{
                justifyContent: "center"
            }}
        >
            <Button
                variant="contained"
                startIcon={<ArrowLeftIcon />}
                // onClick={handleClick}
                color="error"
            
                style={{
                    width: "150px",                
                    fontSize: "18px"
                }}                    
            >
                Back
            </Button>   
        </Box>      
        <Box
            bgcolor="#fff" 
            padding="20px 10px"
            gap={2} 
            textAlign="left"
            height="auto"
        >
            <Typography
                variant="p"
                sx={{
                  fontWeight: "bolder",
                  letterSpacing: 0.5,
                  color: "#000",                  
                }}
            >
                Why Mooove with us!
            </Typography>
            <Divider />
            <br />
            <List>
                <ListItem disablePadding >                        
                    <ListItemIcon
                        sx={{
                          color: "#FF515E",                 
                        }}
                    >
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText 
                        primary="No hidden costs"                          
                    />                    
                </ListItem>
                <ListItem disablePadding >                        
                    <ListItemIcon
                        sx={{
                          color: "#FF515E",                 
                        }}
                    >
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText 
                        primary="Payment Protection"                          
                    />                    
                </ListItem>
                <ListItem disablePadding >                        
                    <ListItemIcon
                        sx={{
                          color: "#FF515E",                 
                        }}
                    >
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText 
                        primary="We've got your back"                          
                    />                    
                </ListItem>
                <ListItem disablePadding >                        
                    <ListItemIcon
                        sx={{
                          color: "#FF515E",                 
                        }}
                    >
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText 
                        primary="Prices are guaranteed"                          
                    />                    
                </ListItem>
            </List>
        </Box>
        <Box
            display="flex"
            flexDirection="column"
            gap={3} 
            textAlign="left"
        >
            <Box>
                <Typography
                    variant="p"
                    sx={{                  
                      letterSpacing: 0.5,
                      color: "#000",                  
                    }}
                >
                    Need an expert opinion?
                </Typography> 
                <Divider /> 
            </Box>
            <Box>
                <Typography
                    variant="p"
                    sx={{                  
                      letterSpacing: 0.5,
                      color: "#000",                  
                    }}
                >
                    Need more services?
                </Typography>
                <Divider />
            </Box>
        </Box>
    </Box>
    
  )
}

export default CompareSideBar
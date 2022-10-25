import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react';
import ChairIcon from '@mui/icons-material/Chair';
import BedIcon from '@mui/icons-material/Bed';
import DiningIcon from '@mui/icons-material/Dining';
import PrintIcon from '@mui/icons-material/Print';
import DeckIcon from '@mui/icons-material/Deck';
import WidgetsIcon from '@mui/icons-material/Widgets';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import InventoryIcon from '@mui/icons-material/Inventory';

function MyItemsSidebar() {
  return (
    <Box 
      bgcolor="#fff" 
      flex={2} 
      gap={2} 
      textAlign="left"
      height="60vh"
    >
      <List>
          <ListItem 
            disablePadding 
            sx={{
              bgcolor: "#9c9292"
            }}
          >
            <ListItemButton component="a" href="get-started" >
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary="My Inventory" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            sx={{
              padding: "0px 20px",
            }}
          >
            <ListItemButton component="a" href="my-items" >
              <ListItemIcon>
                <ChairIcon />
              </ListItemIcon>
              <ListItemText primary="Living Room" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            sx={{
              padding: "0px 20px",
            }}
          >
            <ListItemButton component="a" href="my-items" >
              <ListItemIcon>
                <BedIcon />
              </ListItemIcon>
              <ListItemText primary="Bedroom" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            sx={{
              padding: "0px 20px",
            }}
          >
            <ListItemButton component="a" href="my-items" >
              <ListItemIcon>
                <DiningIcon />
              </ListItemIcon>
              <ListItemText primary="Dining Room" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            sx={{
              padding: "0px 20px",
            }}
          >
            <ListItemButton component="a" href="my-items" >
              <ListItemIcon>
                <SoupKitchenIcon />
              </ListItemIcon>
              <ListItemText primary="Kitchen" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            sx={{
              padding: "0px 20px",
            }}
          >
            <ListItemButton component="a" href="my-items" >
              <ListItemIcon>
                <PrintIcon />
              </ListItemIcon>
              <ListItemText primary="Office" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            sx={{
              padding: "0px 20px",
            }}
          >
            <ListItemButton component="a" href="my-items" >
              <ListItemIcon>
                <DeckIcon />
              </ListItemIcon>
              <ListItemText primary="Outdoor" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            sx={{
              padding: "0px 20px",
            }}
          >
            <ListItemButton component="a" href="my-items" >
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Boxes" />
            </ListItemButton>
          </ListItem>
          <ListItem 
            sx={{
              padding: "0px 20px",
            }}
          >
            <ListItemButton component="a" href="my-items" >
              <ListItemIcon>
                <DevicesOtherIcon />
              </ListItemIcon>
              <ListItemText primary="Other" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default MyItemsSidebar
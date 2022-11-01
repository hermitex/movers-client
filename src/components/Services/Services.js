import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import HowitWorks from '../home/HowitWorks';
import ServiceCard from '../home/ServiceCard'

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52),
  rgba(0, 0, 0, 0.73)),url(${HowitWorks})`,
    height: "30vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 0,
  },
};

function Services() {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      
    }}
    >      
      <Box
        sx={{
          bgcolor: "#2a2a2a",        
          padding: "10px 0px",
          justifyContent: "center",
          height: "30vh"
        }}
      >
      <Grid
        sx={{ flexGrow: 1, my: 1 }}
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
        >
          <Grid
            container
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <ServiceCard
                description="Moving within the same state or within a short distance?"
                service="local moving"
              />
            </Grid>
            <Grid item>
              <ServiceCard
                description="Does your move take you across state lines?"
                service="long-distance moving"
              />
            </Grid>
            <Grid item>
              <ServiceCard
                description="Moving your business to a new address?"
                service="corporate moving"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Box>
      <Box>
      <Box
        sx={{
          width: "60vw",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          margin: "0 auto",  
          padding: "10px 10px",           
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          fontSize="1.2rem"
          sx={{
            color: "#FF515E",            
          }}
        >
          LOCAL MOVING
        </Typography>
        <Divider />
        <Typography
          variant="h6"
          textAlign="center"
          fontSize="1rem"              
        >
          Moving locally usually means moving within the same county and is also referred to as intracounty moving. 
          The easiest way to book local movers is through Mooove. Mooove allows you to find experienced, 
          reliable movers in your area, compare quotes and prices, read online reviews from verified customers 
          and choose from the best local moving companies.
          All of Mooove’s local movers are verified professionals, properly licensed and insured.
        </Typography>
        <Divider />
      </Box>
      <Box
        sx={{
          width: "60vw",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          margin: "0 auto",  
          padding: "10px 10px",           
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          fontSize="1.2rem"
          sx={{
            color: "#FF515E",            
          }}
        >
          LONG-DISTANCE MOVING
        </Typography>
        <Divider />
        <Typography
          variant="h6"
          textAlign="center"
          fontSize="1rem"              
        >
          Moving long-distance usually means moving between counties and is also referred to as intercounty moving. 
          The easiest way to book local movers is through Mooove. Mooove allows you to find experienced, 
          reliable movers in your area, compare quotes and prices, read online reviews from verified customers 
          and choose from the best long-distance moving companies.
          All of Mooove’s long-distance movers are verified professionals, properly licensed and insured.
        </Typography>
        <Divider />
      </Box>
      <Box
        sx={{
          width: "60vw",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          margin: "0 auto",  
          padding: "10px 10px",           
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          fontSize="1.2rem"
          sx={{
            color: "#FF515E",            
          }}
        >
          CORPORATE MOVING
        </Typography>
        <Divider />
        <Typography
          variant="h6"
          textAlign="center"
          fontSize="1rem"              
        >
          Moving corporately usually means moving business premises. 
          The easiest way to book corporate movers is through Mooove. Mooove allows you to find experienced, 
          reliable movers in your area, compare quotes and prices, read online reviews from verified customers 
          and choose from the best corporate moving companies.
          All of Mooove’s corporate movers are verified professionals, properly licensed and insured.
        </Typography>
        <Divider />
      </Box>
      </Box>      
      
      
    </Box>
  )
}

export default Services
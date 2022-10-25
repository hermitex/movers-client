import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, ListItemIcon, Typography } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import React from 'react';
import ChairIcon from '@mui/icons-material/Chair';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SingleItemCard from './SingleItemCard';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function MyItemsFeedCard({ title }) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
        sx={{ 
          maxWidth: "auto" 
        }}
    >
      <CardHeader
        sx={{
            bgcolor: "#9c9292",
            height: "25px"
        }}
        avatar={
          <IconButton sx={{ color: "#fff" }}>
            <ChairIcon  />
          </IconButton>
        }
        action={
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                sx={{ color: "#fff" }}
            >
                <ExpandMoreIcon />
            </ExpandMore>
        }
        titleTypographyProps={{ variant: "h5", fontWeight: "bold", color: "#fff" }}
        title={title}        
      />
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box 
            sx={{
                height: "150px", 
                display: "flex", 
                flexFlow: "row",                
                padding: 2,
                gap: 2
            }} 
        >
            <SingleItemCard />
            <SingleItemCard />        
        </Box>        
      </Collapse>
    </Card>
  )
}

export default MyItemsFeedCard
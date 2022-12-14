import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  ListItemIcon,
  Typography,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import ChairIcon from "@mui/icons-material/Chair";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SingleItemCard from "./SingleItemCard";
import useFetch from "../hooks/useFetch";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function MyItemsFeedCard({ title, component, onAddItem }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const rates = useFetch(`${baseUrl}/rates`);
  const [availableCategories, setAvailableCategories] = useState([]);
  useEffect(() => {
    const livingRoom = rates?.filter(
      (item) => item?.category.toLowerCase() === "living room"
    );
    const kitchen = rates?.filter(
      (item) => item?.category.toLowerCase() === "kitchen"
    );
    const bedroom = rates?.filter(
      (item) => item?.category.toLowerCase() === "bedroom"
    );
    const others = rates?.filter(
      (item) => item?.category.toLowerCase() === "others"
    );
    const office = rates?.filter(
      (item) => item?.category.toLowerCase() === "office"
    );
    const dining = rates?.filter(
      (item) => item?.category.toLowerCase() === "dining room"
    );
    const outdoor = rates?.filter(
      (item) => item?.category.toLowerCase() === "outdoor"
    );

    setAvailableCategories({
      livingRoom,
      bedroom,
      dining,
      office,
      others,
      outdoor,
    });
  }, [rates, setAvailableCategories]);

  const allowedCategories = [
    "living room",
    "kitchen",
    "bedroom",
    "others",
    "office",
    "dining",
    "outdoor",
  ];

  return (
    <Card
      sx={{
        maxWidth: "auto",
      }}
    >
      <CardHeader
        sx={{
          bgcolor: "#9c9292",
          height: "25px",
        }}
        avatar={
          <IconButton sx={{ color: "#fff" }}>
            <ChairIcon />
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
        titleTypographyProps={{
          variant: "h5",
          fontWeight: "bold",
          color: "#fff",
        }}
        title={title}
      />

      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <Box
          sx={{
            height: "150px",
            display: "flex",
            flexFlow: "row",
            padding: 2,
            gap: 2,
          }}
        >
          {/* {availableCategories.map(category=> <SingleItemCard
            onAddItem={onAddItem}
            item="Sofa"
            category="living room"
          />)} */}

          <SingleItemCard
            onAddItem={onAddItem}
            item="Table"
            category="living room"
          />
        </Box>
      </Collapse>
    </Card>
  );
}

export default MyItemsFeedCard;

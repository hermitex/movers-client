import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function SingleItemCard({ item, onAddItem, category, values }) {
  const [data, setData] = useState({
    item: "",
    category: "",
    count: 0,
  });

  const handleIncrement = (event, item, category) => {
    setData({ ...data, item, category, count: data.count + 1 });
  };

  const handleDecrement = (event, item, category) => {
    setData({ ...data, item, category, count: data.count - 1 });
  };

  useEffect(() => {
    if (data.item) {
      onAddItem(data);
    }
  }, [data]);

  return (
    <Card
      sx={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <CardMedia
        component="img"
        height="80"
        image="https://images.pexels.com/photos/4246211/pexels-photo-4246211.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Paella dish"
      />
      <CardContent
        sx={{
          gap: 0,
          padding: "2.5px 10px",
          textAlign: "left",
        }}
      >
        <Typography>{item}</Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ justifyContent: "space-between" }}
      >
        <Button
          size="small"
          variant="outlined"
          onClick={(event) => handleIncrement(event, item, category)}
        >
          {data.count}
        </Button>
        <ButtonGroup
          size="small"
          aria-label="small outlined button group"
        >
          <Button
            item={item}
            onClick={(event) => handleDecrement(event, item, category)}
          >
            -
          </Button>
          <Button
            item={item}
            onClick={(event) => handleIncrement(event, item, category)}
          >
            +
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

export default SingleItemCard;

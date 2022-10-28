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

function SingleItemCard({ item }) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    cabinet: "",
    table: "",
    side_table: "",
    sofa: "",
    bed: "",
    cooker: "",
    fridge: "",
    washing_machine: "",
    microwave: "",
    dining_table: "",
    dining_chair: "",
  });

  const myItemsData = {
    living_room_items: {
      sofa: {
        name: "sofa",
        count: data.sofa,
        category: "living room",
      },
      table: {
        name: "table",
        count: data.table,
        category: "living room",
      },
      cabinet: {
        name: "cabinet",
        count: 0,
        category: "living room",
      },
    },
    dining_room_items: {
      dining_table: {
        name: "dining table",
        count: data.dining_table,
        category: "dining room",
      },
      dining_chair: {
        name: "dining chair",
        count: data.dining_chair,
        category: "dining room",
      },
    },
    kitchen_items: {
      cooker: {
        name: "cooker",
        count: 0,
        category: "kitchen",
      },
      washing_machine: {
        name: "washing machine",
        count: data.washing_machine,
        category: "kitchen",
      },
      fridge: {
        name: "fridge",
        count: data.fridge,
        category: "kitchen",
      },
      microwave: {
        name: "microwave",
        count: data.microwave,
        category: "kitchen",
      },
    },
    bed_room_items: {
      bed: {
        name: "bed",
        count: data.bed,
        category: "bedroom",
      },
      side_table: {
        name: "side table",
        count: data.side_table,
        category: "bedroom",
      },
    },
  };

  const handleIncrement = (event) => {
    setCount((count) => count + 1);
    // console.log(`add ${item}`);
  };

  const handleDecrement = (event) => {
    setCount((count) => count - 1);
  };
  useEffect(() => {
    return () => {
      const name = item.toLowerCase();
      setData({
        ...data,
        [name]: item,
        count: count,
        category: [data[name]].category,
      });
    };
  }, [item, count]);

  console.log(data);

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
          onClick={handleIncrement}
        >
          {count}
        </Button>
        <ButtonGroup
          size="small"
          aria-label="small outlined button group"
        >
          <Button
            item={item}
            onClick={handleDecrement}
          >
            -
          </Button>
          <Button
            item={item}
            onClick={handleIncrement}
          >
            +
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

export default SingleItemCard;

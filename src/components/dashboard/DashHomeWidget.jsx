import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const adminData = [
  { title: "movers", metric: 100000, isMoney: false },
  { title: "customers", metric: 10000, isMoney: false },
  { title: "earnings", metric: 10000, isMoney: true },
  { title: "total moves", metric: 10000, isMoney: true },
];

const moverData = [
  { title: "all moves", metric: 10000, isMoney: false },
  { title: "earnings", metric: 100000, isMoney: true },
  { title: "balance", metric: 10000, isMoney: true },
  { title: "pending moves", metric: 10000, isMoney: false },
  { title: "completed moves", metric: 10000, isMoney: false },
];

const customerData = [
  { title: "all inventories", metric: 10000, isMoney: false },
  { title: "total spendings", metric: 100000, isMoney: true },
  { title: "total bookings", metric: 10000, isMoney: true },
  { title: "pending bookings", metric: 10000, isMoney: false },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DashHomeWidget({ user = "mover" }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    switch (user) {
      case "customer":
        setData(customerData);
        break;
      case "mover":
        setData(moverData);
        break;
      case "admin":
        setData(adminData);
        break;

      default:
        break;
    }
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {data?.map((d) => (
          <Grid
            key={d.title}
            item
            xs={12}
            sm={6}
            md={3}
          >
            <Card sx={{ maxWidth: "100%" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="p"
                  textTransform="uppercase"
                  fontWeight="bolder"
                  color="text.secondary"
                  component="div"
                >
                  {d.title}
                </Typography>
                <Typography variant="h5">{d.metric}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">see all</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DashHomeWidget;

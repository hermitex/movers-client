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
  CircularProgress,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ProgressIndicator from "../utils/ProgressIndicator";
import { CircularProgressbar } from "react-circular-progressbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Spinner() {
  return <CircularProgress color="danger" />;
}

function DashHomeWidget({ user, widgetData }) {
  const [data, setData] = React.useState(null);
  user = user?.user;
  const { customer } = widgetData();
  const { mover } = widgetData();
  const { admin } = widgetData();

  React.useEffect(() => {
    switch (user?.account_type) {
      case "customer":
        setData(customer);
        break;
      case "mover":
        setData(mover);
        break;
      case "admin":
        setData(admin);
        break;
      default:
        break;
    }
  }, [user?.account_type]);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {!data ? (
          <ProgressIndicator />
        ) : (
          data?.map((d) => (
            <Grid
              key={d.title}
              item
              xs={12}
              sm={6}
              md={3}
            >
              <Card sx={{ maxWidth: "100%", minHeight: "10rem" }}>
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
                  <Typography variant="h5">
                    {!d.metric ? <ProgressIndicator /> : d.metric}
                  </Typography>
                </CardContent>
                <CardActions>
                  <NavLink to={`${d.title}`}>
                    {" "}
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                    >
                      see all
                    </Button>
                  </NavLink>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default DashHomeWidget;

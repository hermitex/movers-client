import { Button, Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/error/404-error-page.png";

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.42),
rgba(0, 0, 0, 0.63)),url(${error})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
};

function Error404() {
  return (
    <Paper style={styles.paperContainer}>
      <Link to="/home">
        <Button
          variant="contained"
          color="primary"
        >
          Go back to home
        </Button>
      </Link>
    </Paper>
  );
}

export default Error404;

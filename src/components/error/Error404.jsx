import { Container } from "@mui/material";
import React from "react";
import error from "../../assets/error/404-error-page.png";
function Error404() {
  return (
    <Container
      sx={{
        display: "flex",
        width: "90vw",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <img
        width="70%"
        src={error}
        alt="Page Not Found"
      />
    </Container>
  );
}

export default Error404;

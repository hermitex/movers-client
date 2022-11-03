import { Box, Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { NavLink } from "react-router-dom";
import success from "../../assets/moving-process/check.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Success({ onBookAgain }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        justifyItems: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <img
        width="20%"
        src={success}
        alt="Success"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <NavLink to="/dashboard">
          <Button
            variant="outlined"
            color="error"
          >
            Go to Dashboard
          </Button>
        </NavLink>
        <Button
          variant="outlined"
          color="error"
          onBookAgain={onBookAgain}
        >
          Book Again
        </Button>
      </Box>
    </Container>
  );
}

function SuccessModal({ isOpen, message }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Success!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            fontSize="1.5rem"
            textAlign="center"
          >
            {message}
          </Typography>
          <Success />
        </Box>
      </Modal>
    </div>
  );
}

export default SuccessModal;

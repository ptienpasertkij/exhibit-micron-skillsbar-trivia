import React from "react";
import Box from "@mui/material/Box";

const ConnectionErrorNotification = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ff1744",
        color: "white",
        textAlign: "center",
        padding: "10px",
        position: "absolute",
        top: 0,
        left: 0,
        fontSize: "1.5rem",
        zIndex: 1000 // High z-index to ensure it's on top of everything
      }}
    >
      Server connection error. You can still play the game, but scores may not
      update.
    </Box>
  );
};

export default ConnectionErrorNotification;

import { SocketContext } from "../Context";
import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";

const Notifications = () => {
  const { answerCall, call, callAccepted, name } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            maxWidth: { xs: "222px", md: "inherit" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ wordWrap: "break-word" }}>
            {call.name} is calling:
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              answerCall(name);
            }}
          >
            Answer
          </Button>
        </Box>
      )}
    </>
  );
};

export default Notifications;

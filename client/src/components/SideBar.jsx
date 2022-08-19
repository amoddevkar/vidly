import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState, useContext } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";
import { SocketContext } from "../Context";
const SideBar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <Container sx={{ margin: "15px 0", padding: 0, width: "fit-content" }}>
      <Paper
        elevation={10}
        sx={{
          padding: "10px 20px",
          border: "2px solid black",
          width: "fit-content",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "fit-content",
            }}
          >
            <Box
              padding={"20px"}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                Account Info
              </Typography>
              <TextField
                label="Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
                inputProps={{ maxLength: 20 }}
                color="secondary"
              />
              <CopyToClipboard text={me}>
                <Button
                  sx={{ mt: "10px" }}
                  variant="contained"
                  color="secondary"
                  startIcon={<Assignment fontSize="large" />}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Box>
            <Box
              padding={"20px"}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                Make a call
              </Typography>
              <TextField
                label="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                variant="standard"
                color="secondary"
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  onClick={() => {
                    leaveCall(idToCall);
                  }}
                  sx={{ mt: "10px" }}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<Phone fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                  sx={{ mt: "10px" }}
                >
                  Call
                </Button>
              )}
            </Box>
          </Box>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default SideBar;

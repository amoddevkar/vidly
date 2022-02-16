import { AppBar, Typography, Box } from "@mui/material";
import React from "react";
import SideBar from "./components/SideBar";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import "./styles.css";
function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <AppBar
        color={"secondary"}
        sx={{
          justifyContent: "center",
          textAlign: "center",
          height: "80px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
           mt:"5px",
            fontFamily: "Raleway",
            fontWeight: 300,
            fontSize: "40px",
          }}
        >
          Vidly
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "4px",
            lineHeight: "3em",
            color: "#D0D0D0"
          }}
          gutterBottom
        >
          start Videochats easily 
        </Typography>
      </AppBar>
      <VideoPlayer />
      <SideBar>
        <Notifications />
      </SideBar>
    </Box>
  );
}

export default App;

import { Box, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SocketContext } from "../Context";
const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <Box sx={{ display:"flex", justifyContent: "center", mt: "100px" ,flexDirection:{xs:"column",md:"row"}}}>
      {stream && (
        <Paper sx={{width:"350px",p:"2px",m:"10px",bgcolor:"#d6d4e0"}}>
          <Typography sx={{ fontSize: "20px", wordWrap:"break-word", fontFamily: "Raleway",}} gutterBottom>
            {name || "name"}
          </Typography>
          <video
            autoPlay
            playsInline
            muted
            style={{ width:"350px" }}
            ref={myVideo}
          ></video>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper sx={{width:"350px",p:"2px",m:"10px",bgcolor:"#d6d4e0"}}>
          <Typography sx={{ fontSize: "20px",wordWrap:"break-word" , fontFamily: "Raleway",}} gutterBottom>
            {call.name || "callname"}
          </Typography>
          <video
            ref={userVideo}
            autoPlay
            playsInline
            muted
            style={{ width: "350px" }}
          ></video>
        </Paper>
      )}
    </Box>
  );
};

export default VideoPlayer;

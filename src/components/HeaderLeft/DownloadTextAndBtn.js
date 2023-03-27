import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const DownloadTextAndBtn = () => {
  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          position: "absolute",
          top: "500px",
          left: "100px",
        }}
      >
        Send The Download Link To Your Phone
      </Typography>
      <TextField
        sx={{
          position: "absolute",
          display: "inline",
          top: "570px",
          left: "100px",
          backgroundColor: "white",
        }}
        className="inputRounded"
        label="fullWidth"
        variant="outlined"
      />
      <Button
        sx={{
          position: "absolute",
          backgroundColor: "red",
          display: "inline",
          width: "100px",
          height: "56px",
          top: "570px",
          left: "322.4px",
          borderRadius: "0px 5px 5px 0px",
          boxShadow: 0,
        }}
        variant="contained"
        elevation={0}
      >
        Send
      </Button>
    </>
  );
};

export default DownloadTextAndBtn;

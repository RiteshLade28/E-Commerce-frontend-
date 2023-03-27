import React from "react";
import Typography from "@mui/material/Typography";

const MainHeading = () => {
  return (
    <Typography
      variant="h1"
      gutterBottom
      fontSize="4rem"
      sx={{
        position: "absolute",
        width: "600px",
        top: "250px",
        left: "100px",
      }}
    >
      Meet{" "}
      <Typography
        variant="h1"
        gutterBottom
        fontSize="4rem"
        sx={{
          display: "inline",
          color: "red",
        }}
      >
        Shop
      </Typography>
      {}, Your New Shopping Assistant.
    </Typography>
  );
};

export default MainHeading;

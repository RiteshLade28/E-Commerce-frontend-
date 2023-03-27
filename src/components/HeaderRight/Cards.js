import React from "react";
import Grid from "@mui/material/Grid";

import Square from "./Square.js";

import mobile from "../../assets/mobile.png";
import headPhone from "../../assets/HeadPhone.webp";
import webcam from "../../assets/webcam.png";
import joystick from "../../assets/joystick.jpg";
import Circle from "./Circle.js";

const Cards = () => {
  return (
    <>
      <Circle />
      <Circle
        height="150px"
        width="150px"
        top="630px"
        left="710px"
        backgroundColor="orange"
      />

      <Grid item xs={6}>
        <Square top="100px" right="500px" img={mobile} txt="Mobile" />
        <Square
          top="150px"
          right="176.413px"
          img={headPhone}
          txt="Head Phone"
        />
        <Square top="450px" right="500px" img={webcam} txt="Webcam" />
        <Square top="500px" right="176.413px" img={joystick} txt="Joystick" />
      </Grid>
    </>
  );
};

export default Cards;

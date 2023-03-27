import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import { positions } from "@mui/system";

import Box from "@mui/material/Box";

import ShopBetter from "./ShopBetter";
import MainHeading from "./MainHeading";
import DownloadTextAndBtn from "./DownloadTextAndBtn";

const Heading = () => {
  return (
    <Grid item xs={6}>
      <ShopBetter />
      <MainHeading />
      <DownloadTextAndBtn />
    </Grid>
  );
};

export default Heading;

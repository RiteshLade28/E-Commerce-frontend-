import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, useThemeProps } from "@mui/material";

export default function ActionAreaCard(props) {
  return (
    <Card
      raised
      sx={{
        width: 250,
        position: "absolute",
        top: props.top,
        right: props.right,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.img}
          alt="green iguana"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.txt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

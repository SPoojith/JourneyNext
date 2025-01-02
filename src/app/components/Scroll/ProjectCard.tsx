import "./Scroll.css";
import { useEffect, useRef, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
interface Pcard {
  imageUrl : string;
  Heading: string;
  Text: string;
}
function ProjectCard({imageUrl,Heading,Text}:Pcard) {
  return (
    <Card style={{padding:'10px',backgroundColor:'black',color:'white',borderBottom:'2px solid red'}}>
      <CardActionArea>
        <CardMedia component="img" height="100%" image={imageUrl} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Heading}
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            {Text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;

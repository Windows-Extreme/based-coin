import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  IconButton
} from "@mui/material";
import { LinkedIn, GitHub } from '@mui/icons-material'

export default class ProfileCard extends React.Component {
  
  render() {
    return (
      <>

        <Card sx={{ width: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="320"
              width="320"
              image={this.props.image}
              alt="Profile Picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {this.props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {this.props.description}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>

              <IconButton
                color="inherit"
                component="a"
                href={this.props.linkedin}
              >
                <LinkedIn/>
              </IconButton>

              <IconButton
                color="inherit"
                component="a"
                href={this.props.github}
              >
                <GitHub/>
              </IconButton>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  }
}
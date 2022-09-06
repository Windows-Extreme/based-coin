import React from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

class ProfileCard extends React.Component {
  render() {
    console.log(this.props.image)
    return (
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={this.props.image}
              alt="Profile Picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {this.props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {this.props.description}
              {this.props.keyword}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  }
}

export default ProfileCard;

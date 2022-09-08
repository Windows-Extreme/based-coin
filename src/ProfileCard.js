import React from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

class ProfileCard extends React.Component {
  
  render() {
    return (
      <>

        <Card sx={{ maxWidth: 345 }}>
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
                <LinkedInIcon></LinkedInIcon>
              </IconButton>

              <IconButton
                color="inherit"
                component="a"
                href={this.props.github}
              >
                <GitHubIcon></GitHubIcon>
              </IconButton>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  }
}

export default ProfileCard;

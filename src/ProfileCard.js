import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

class ProfileCard extends React.Component {


  render() {
    return (
      <>
        <Card variant="outlined" sx={{ minWidth: "320px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography
              level="h2"
              fontSize="md"
              sx={{ alignSelf: "flex-start" }}
            >
              Person 1
            </Typography>
            <Typography level="body2">April 24 to May 02, 2021</Typography>
          </Box>
            <img
              src={this.props.imgSrc}
              alt="Profile pic"
            />
          <Box sx={{ display: "flex" }}>
            <div>
              <Typography level="body3">Total price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                lorem ipsom
              </Typography>
            </div>
            <Button
              variant="solid"
              size="sm"
              color="primary"
              aria-label="Explore Bahamas Islands"
              sx={{ ml: "auto", fontWeight: 600 }}
            >
              Explore
            </Button>
          </Box>
        </Card>
      </>
    );
  }
}

export default ProfileCard;

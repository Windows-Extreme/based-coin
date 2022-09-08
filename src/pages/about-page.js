import React from "react";
import ProfileCard from "../ProfileCard";
import DevProfiles from "../DevProfiles.json";
import { UnsignedLayout } from "../components/unsigned-layout";
import { Grid, Typography, Container } from "@mui/material";

class AboutUs extends React.Component {
  profile = DevProfiles.map((value) => {
    return (
      <Grid item>
      <ProfileCard
        key={value._id}
        image={value.image_url}
        name={value.name}
        description={value.description}
        linkedin={value.linkedin}
        github={value.github}
      />
      </Grid>
    );
  });

  render() {
    return (
      <>
        <UnsignedLayout>

          <Container sx={{ textAlign: "center", maxWidth: 500 }}>
          <Typography align = "center" variant= "h3" gutterBottom >
            Coin Fellows
          </Typography>
          <Typography align = "center" variant= "body1" gutterBottom >

          Here at Coin Fellows, we are pioneering the future of cryptocurrency and blockchain technology. Our mission is to bring ease of access to the world and enable our users with unbiased and accurate data to allow the user to make their own informed decision.We started in 2022 with the radical idea that anyone, anywhere, should be able to easily and securely track Bitcoin and other Crypto assets. Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.
          </Typography>
          </Container>

          <Grid container spacing={2}
            // sx={{
            //   justifyContent: "space-evenly",
            //   display: "flex",
            //   margin: "2rem",
            // }}
          >
            {this.profile}
          </Grid>
        </UnsignedLayout>
      </>
    );
  }
}

export default AboutUs;

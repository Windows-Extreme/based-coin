import React from "react";
import {
  Typography, 
  Container, 
  Box 
} from "@mui/material";
import UnsignedLayout from "../components/unsigned-layout";
import ProfileCard from "../components/profile-card";
import DevProfiles from "../DevProfiles.json";

export default class AboutUs extends React.Component {
  profile = DevProfiles.map((value) => {
    return (
      <ProfileCard
        key={value._id}
        image={value.image_url}
        name={value.name}
        description={value.description}
        linkedin={value.linkedin}
        github={value.github}
      />
    );
  });

  render() {
    return (
      <>
        <UnsignedLayout>
          <Container sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Box maxWidth={500}>
          <Typography align = "center" variant= "h3" gutterBottom >
            Coin Fellows
          </Typography>
          <Typography align="center" variant= "body1" mb={2} >
            Here at Coin Fellows, we're making cryptocurrency more accessible to the masses. Our mission is to bring ease of access to the world and enable our users with unbiased and accurate data.
          </Typography>
          <Typography align="center" variant= "body1" mb={6}>
            We allow you to make your own informed decisions. We started in 2022 with the idea that anyone, anywhere, should be able to easily and securely track any crypto asset. Today, we offer a trustworthy and easy-to-use platform for accessing the broader cryptoeconomy.
          </Typography>
          </Box>
          </Container>
          <Box display="grid" gridTemplateColumns='repeat(auto-fit, minmax(320px, 1fr))' justifyItems='center'>
            {this.profile}
          </Box>
        </UnsignedLayout>
      </>
    );
  }
}
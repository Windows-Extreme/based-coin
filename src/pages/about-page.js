import React from "react";
import ProfileCard from "../ProfileCard";
import DevProfiles from "../DevProfiles.json";
import { UnsignedLayout } from "../components/unsigned-layout";
import { Grid, Typography, Container } from "@mui/material";

class AboutUs extends React.Component {
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

          <Container sx={{ textAlign: "center", maxWidth: 500 }}>
          <Typography align = "center" variant= "h3" gutterBottom >
            Coin Fellows
          </Typography>
          <Typography align = "center" variant= "body1" gutterBottom >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </Typography>
          </Container>

          <Grid
            sx={{
              justifyContent: "space-evenly",
              display: "flex",
              margin: "2rem",
            }}
          >
            {this.profile}
          </Grid>
        </UnsignedLayout>
      </>
    );
  }
}

export default AboutUs;

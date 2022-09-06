import React from "react";
import ProfileCard from './ProfileCard';
import DevProfiles from './DevProfiles.json';





class AboutUs extends React.Component {

    profile = DevProfiles.map((value) => {
        return (
            <ProfileCard
              key={value._id}
              image={value.image_url}
              name={value.name}
              description={value.description}
              keyword={value.keyword}
            />
        );
    });

  render() {

    return (
      <>
        {this.profile}
      </>
    );
  }
}

export default AboutUs;

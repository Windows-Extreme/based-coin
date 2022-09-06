import { withAuth0 } from '@auth0/auth0-react';
import React from "react";
import ProfileCard from '../ProfileCard';
import {UnsignedLayout} from '../components/unsigned-layout';

class AboutUs extends React.Component {

  render() {
    return (
      <>
        <UnsignedLayout>
          <ProfileCard />
        </UnsignedLayout>
      </>
    );
  }
}

export default withAuth0(AboutUs);

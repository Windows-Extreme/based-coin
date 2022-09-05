import { withAuth0 } from '@auth0/auth0-react';
import React from "react";
import ProfileCard from '../ProfileCard';
import { PageLayout } from '../components/page-layout';
import {UnsignedLayout} from '../components/unsigned-layout';

class AboutUs extends React.Component {



  render() {
    const { isAuthenticated } = this.props.auth0
    return (
      <>
        {isAuthenticated && (
        <PageLayout>
          <ProfileCard />
        </PageLayout>
        )}
        {!isAuthenticated && (
          <UnsignedLayout>
            <ProfileCard />
          </UnsignedLayout>
        )}
      </>
    );
  }
}

export default withAuth0(AboutUs);

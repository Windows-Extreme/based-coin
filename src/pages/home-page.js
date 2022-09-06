import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PageLayout } from '../components/page-layout';

export const HomePage = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userWatchList, setUserWatchList] = useState(null);

  useEffect(() => {
    const getUserWatchList = async () => {
      const domain = process.env.REACT_APP_AUTH0_SERVER_URL;

      try {
        const accessToken = await getAccessTokenSilently();

        // Maybe refactor this later using Axios?
        const response = await fetch(
          `${domain}/protected`, 
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
          },
        });

        const user_metadata = await response;

        setUserWatchList(user_metadata);

      } catch (e) {
        console.error(e.message);
      }
    };

    getUserWatchList();
    
  }, [getAccessTokenSilently, user?.sub]);

  console.log(userWatchList)
  return (
    isAuthenticated && (
      <PageLayout>
      <div>Hello world!</div>
      <div>Hello {user.name}</div>
      </PageLayout>
    )
  )
}
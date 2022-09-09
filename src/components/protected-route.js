import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from 'react';

export default function ProtectedRoute({ component, ...props  }) {
  const Component = withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className='page-layout'>
          <div>Loading...</div>
        </div>
      ),
    });

    return <Component {...props} />;
}
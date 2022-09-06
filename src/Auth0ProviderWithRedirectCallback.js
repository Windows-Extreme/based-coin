import { useNavigate } from "react-router-dom";
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';


export const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  }
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      { children }
    </Auth0Provider>
  )
}
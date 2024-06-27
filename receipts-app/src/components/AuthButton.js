import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MissingRefreshTokenError } from '@auth0/auth0-react';

const AuthButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default AuthButton;

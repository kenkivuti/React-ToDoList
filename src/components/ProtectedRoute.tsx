import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
  element: any;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, path }) => {
  const token: string | null = localStorage.getItem("token") || null;

  return (
    <Route
      path={path}
      Component={({  }) =>
        token && token !== "" ? (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        ) : (
          <Redirect to={{ pathname: "/Login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;

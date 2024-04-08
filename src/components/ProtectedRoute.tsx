import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';



interface ProtectedRouteProps {
    element: any;
    path: string;
  }
  
  const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
    const {  ...routeProps } = props;
   const token:string = localStorage.getItem("token") || "";
    return (
      <Route
        {...routeProps}
        render={({ }) =>
        token && token !== "" ?  (
            <Redirect to={{ pathname: "/", state: { from: location } }} />
          ) : (
            <Redirect to={{ pathname: "/Login", state: { from:location } }} />
          )
        }
      />
    );
  };
  export default ProtectedRoute;
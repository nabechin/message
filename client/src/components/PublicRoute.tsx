import React from "react";
import { Route } from "react-router-dom";

interface Props {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const PublicRoute = ({
  component: Component,
  ...otherProps
}: Props): JSX.Element => {
  return (
    <Route
      render={(otherProps: any) => (
        <>
          <Component {...otherProps} />
        </>
      )}
    ></Route>
  );
};

export default PublicRoute;

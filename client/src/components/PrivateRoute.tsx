import React from "react";
import Login from "../containers/pages/Login";
import { Route } from "react-router-dom";
import useToken from "../hooks/useToken";

interface Props {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component }: Props): JSX.Element => {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login></Login>;
  }
  return (
    <React.Fragment>
      <Route
        render={(otherProps: any) => (
          <>
            <Component {...otherProps} />
          </>
        )}
      ></Route>
    </React.Fragment>
  );
};

export default PrivateRoute;

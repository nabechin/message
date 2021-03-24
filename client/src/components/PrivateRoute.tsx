import React from "react";
import Login from "../containers/pages/Login";
import { Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface Props {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component }: Props): JSX.Element => {
  const { auth, setAuth } = useAuth();
  if (!auth) {
    return <Login setAuth={setAuth}></Login>;
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

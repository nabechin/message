import React from "react";
import Login from "../containers/pages/Login";
import Home from "../containers/pages/Home";
import { Route } from "react-router-dom";
import useToken from "../hooks/useToken";

const PrivateRoute = (): JSX.Element => {
  const { token, setToken } = useToken();
  // if (!token) {
  //   return <Login></Login>;
  // }
  return (
    <React.Fragment>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </React.Fragment>
  );
};

export default PrivateRoute;

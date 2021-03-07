import React from "react";
import Signup from "../containers/pages/Signup";
import { Route } from "react-router-dom";

const PublicRoute = (): JSX.Element => {
  console.log("aa");
  return (
    <React.Fragment>
      <Route exact path="/signup">
        <Signup></Signup>
      </Route>
    </React.Fragment>
  );
};

export default PublicRoute;

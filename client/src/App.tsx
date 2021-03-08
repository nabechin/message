import React from "react";
import Login from "./containers/pages/Login";
import Home from "./containers/pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Signup from "./containers/pages/Signup";
import { BrowserRouter, Switch } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute component={Home} exact={true} path="/" />
            <PublicRoute component={Signup} exact={true} path="/signup" />
            <PublicRoute component={Login} exact={true} path="/login" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

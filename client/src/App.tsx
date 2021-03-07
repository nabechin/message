import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { BrowserRouter, Switch } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute />
            <PublicRoute />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Login from "./containers/pages/Login";
import Home from "./containers/pages/Home";
import Signup from "./containers/pages/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/signup">
                <Signup></Signup>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import Home from "./containers/pages/Home";
class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <Home></Home>
        </div>
      </div>
    );
  }
}

export default App;

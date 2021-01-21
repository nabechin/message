import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <div
          style={{
            width: 70,
            flexShrink: 0,
            height: "100vh",
            backgroundColor: "#1a1a1a",
          }}
        >
          <Divider />
          <List>
            <ListItem button style={{ margin: "5px 0 5px 0" }}>
              <PermIdentityOutlinedIcon
                fontSize="large"
                style={{ color: "white" }}
              />
            </ListItem>
            <ListItem button style={{ margin: "5px 0 5px 0" }}>
              <MessageOutlinedIcon
                fontSize="large"
                style={{ color: "white" }}
              />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default App;

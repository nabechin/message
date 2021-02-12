import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import Message from "./Message";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { styled, makeStyles, createStyles } from "@material-ui/core/styles";

const GridWithBorder = styled(Grid)({
  borderRight: "1px solid #a6a6a6",
});
class App extends React.Component {
  private contactList: { roomname: string; talk: string }[] = [
    { roomname: "ぶらり車旅", talk: "お疲れ" },
    { roomname: "俺ら青春の", talk: "yes" },
    { roomname: "彼女", talk: "今日空いてる？" },
  ];
  contactElementList = (): JSX.Element[] => {
    return this.contactList.map((contact, key) => {
      return (
        <React.Fragment key={key}>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={contact.roomname}
              secondary={contact.talk}
            ></ListItemText>
          </ListItem>
        </React.Fragment>
      );
    });
  };
  render(): JSX.Element {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: 70,
              flexShrink: 0,
              height: "100vh",
              backgroundColor: "#333333",
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
          <Grid container>
            <GridWithBorder item xs={3}>
              <List>{this.contactElementList()}</List>
            </GridWithBorder>
            <Divider flexItem={false} />
            <Grid item xs={9}>
              <Message></Message>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { styled } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const GridWithBorder = styled(Grid)({
  borderRight: "1px solid #a6a6a6",
});

const OthersIcon = styled(Avatar)({
  width: "100%",
});

const roomPanel = {
  height: "100vh",
};

const others = {
  width: "100%",
  margin: "10px 0",
  overflow: "hidden",
};

const othersIconFrame = {
  float: "left",
  marginRight: "-50px",
  width: "40px",
} as React.CSSProperties;

const othersChatting = {
  width: "100%",
  textAlign: "left",
} as React.CSSProperties;

const says = {
  display: "inline-block",
  position: "relative",
  margin: "0 0 0 50px",
  padding: "10px",
  maxWidth: "250px",
  borderRadius: "12px",
  background: "#edf1ee",
} as React.CSSProperties;

const style = {
  says: {
    after: {
      content: "",
      display: "inline-block",
      position: "absolute",
      top: "3px",
      left: "-19px",
      border: "8px solid transparent",
      borderRight: "18px solid #edf1ee",
      webkitTransform: "rotate(35deg)",
      transform: "rotate(35deg)",
    },
  },
};

interface Props {
  classes: {
    says: string;
  };
}

class App extends React.Component<Props> {
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
            <Grid item xs={9}>
              <div style={roomPanel}>
                <div style={others}>
                  <div style={othersIconFrame}>
                    <OthersIcon></OthersIcon>
                  </div>
                  <div style={othersChatting}>
                    <div style={says} className={this.props.classes.says}>
                      <p>左ふきだし文</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(App);

import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubHeader from "@material-ui/core/ListSubheader";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: "auto",
      maxHeight: "100vh",
      backgroundColor: theme.palette.background.paper,
    },
    listSection: {
      backgroundColor: "inherit",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
  })
);
const createFriendAndGroup = (section: string): string[] => {
  if (section === "friends") {
    return ["yuya", "kioka", "issei", "yuma"];
  } else {
    return ["ぶらり車旅", "スノボー", "ラクス"];
  }
};

const FriendList = (): JSX.Element => {
  const classes = useStyles();
  return (
    <List className={classes.root} subheader={<li />}>
      {["groups", "friends"].map((section) => (
        <li key={`section-${section}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubHeader>{section}</ListSubHeader>
            {createFriendAndGroup(section).map((item) => (
              <ListItem key={`item-${item}`}>
                <ListItemText primary={item}></ListItemText>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default FriendList;

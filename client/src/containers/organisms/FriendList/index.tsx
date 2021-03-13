import React from "react";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubHeader from "@material-ui/core/ListSubheader";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
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

interface FriendListIndex {
  sectionKey: number;
  itemKey: number;
}

interface Props {
  onClick: (param: FriendListIndex) => void;
  friendIndex: FriendListIndex | null;
}

const FriendList = (props: Props): JSX.Element => {
  const classes = useStyles();
  const onClick = (friendIndex: FriendListIndex) => {
    props.onClick(friendIndex);
  };
  const isSelected = (outerKey: number, innerKey: number): boolean => {
    if (props.friendIndex === null) {
      return false;
    }
    if (
      outerKey === props.friendIndex.sectionKey &&
      innerKey === props.friendIndex.itemKey
    ) {
      return true;
    }
    return false;
  };
  return (
    <List className={classes.root} subheader={<li />}>
      {["groups", "friends"].map((section, outerkey) => (
        <li key={`section-${section}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubHeader>{section}</ListSubHeader>
            {createFriendAndGroup(section).map((item, innerKey) => (
              <ListItem
                key={`item-${item}`}
                button
                onClick={() =>
                  onClick({ sectionKey: outerkey, itemKey: innerKey })
                }
                {...(isSelected(outerkey, innerKey) && props.friendIndex
                  ? { selected: true }
                  : null)}
              >
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
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

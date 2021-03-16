import React, { useState, useEffect } from "react";
import axios from "axios";
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

interface FriendListIndex {
  sectionKey: number;
  itemKey: number;
}

interface Friend {
  name: string;
  roomId: number;
}

interface Props {
  onFriendClick: (param: FriendListIndex) => void;
  onClick: (room_id: number) => void;
  friendIndex: FriendListIndex | null;
}

const FriendList = (props: Props): JSX.Element => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [groups, setGroups] = useState<[]>([]);
  useEffect(() => {
    const getFriends = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/users/1/friends",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setFriends(data);
    };
    getFriends();
  }, []);

  const classes = useStyles();
  const onClick = (friendIndex: FriendListIndex, room_id: number) => {
    props.onClick(room_id);
    props.onFriendClick(friendIndex);
  };
  const createFriendAndGroup = (section: string): Friend[] => {
    if (section === "friends") {
      return friends;
    } else {
      return groups;
    }
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
      {["groups", "friends"].map((section, outerKey) => (
        <li key={`section-${section}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubHeader>{section}</ListSubHeader>
            {createFriendAndGroup(section).map((item, innerKey) => (
              <ListItem
                key={`${outerKey}, ${innerKey}`}
                button
                onClick={() =>
                  onClick(
                    { sectionKey: outerKey, itemKey: innerKey },
                    item.roomId
                  )
                }
                {...(isSelected(outerKey, innerKey) && props.friendIndex
                  ? { selected: true }
                  : null)}
              >
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name}></ListItemText>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default FriendList;

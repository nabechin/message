import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const RoomList = (): JSX.Element => {
  const contactList = (): { roomname: string; talk: string }[] => {
    return [
      { roomname: "友達A", talk: "お疲れ" },
      { roomname: "友達B", talk: "お疲れ" },
      { roomname: "友達C", talk: "お疲れ" },
    ];
  };
  const renderContactList = (): JSX.Element[] => {
    return contactList().map((contact, key) => {
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
  return <div>{renderContactList()}</div>;
};
export default RoomList;

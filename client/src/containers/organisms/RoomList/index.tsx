import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

interface Rooms {
  id: number;
  name: string;
  message: string;
}

interface Props {
  onClick: (roomId: number) => void;
  roomId: number | null;
}
const RoomList = (props: Props): JSX.Element => {
  const [rooms, setRooms] = useState<Rooms[]>([]);
  useEffect(() => {
    const getRooms = async () => {
      const { data } = await axios.get("http://localhost:5000/rooms/1");
      setRooms(data);
    };
    getRooms();
  }, []);
  const onClick = (roomId: number) => {
    props.onClick(roomId);
  };

  const isSelected = (roomId: number): boolean => {
    if (!props.roomId) {
      return false;
    }
    if (roomId == props.roomId) {
      return true;
    } else {
      return false;
    }
  };

  const renderContactList = (): JSX.Element[] => {
    return rooms.map((room, key) => {
      return (
        <React.Fragment key={key}>
          <List>
            <ListItem
              button
              onClick={() => onClick(room.id)}
              {...(isSelected(room.id) ? { selected: true } : null)}
            >
              <ListItemAvatar>
                <Avatar></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={room.name}
                secondary={room.message}
              ></ListItemText>
            </ListItem>
          </List>
        </React.Fragment>
      );
    });
  };
  return <div>{renderContactList()}</div>;
};
export default RoomList;

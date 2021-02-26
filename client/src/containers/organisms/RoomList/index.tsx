import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

interface Rooms {
  name: string;
  message: string;
}
const RoomList = (): JSX.Element => {
  const [rooms, setRooms] = useState<Rooms[]>([]);
  useEffect(() => {
    const getRooms = async () => {
      const { data } = await axios.get("http://localhost:5000/rooms/1");
      setRooms(data);
      console.log(data);
    };
    getRooms();
  }, []);

  const renderContactList = (): JSX.Element[] => {
    return rooms.map((room, key) => {
      return (
        <React.Fragment key={key}>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={room.name}
              secondary={room.message}
            ></ListItemText>
          </ListItem>
        </React.Fragment>
      );
    });
  };
  return <div>{renderContactList()}</div>;
};
export default RoomList;

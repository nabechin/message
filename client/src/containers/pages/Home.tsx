import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import FriendList from "../organisms/FriendList";
import List from "@material-ui/core/List";

import RoomList from "../organisms/RoomList";
import Message from "../organisms/Message";
import SideBar from "../organisms/SideBar";
import { styled } from "@material-ui/core/styles";

const GridWithBorder = styled(Grid)({
  borderRight: "1px solid #a6a6a6",
});

const Home = (): JSX.Element => {
  const [roomId, setRoomId] = useState("1");
  const [tabIndex, setTubindex] = useState(0);
  const onClick = (roomId: string) => {
    setRoomId(roomId);
  };
  const renderMenuList = (): JSX.Element => {
    if (tabIndex === 0) {
      return <RoomList onClick={onClick} roomId={roomId}></RoomList>;
    } else {
      return <FriendList></FriendList>;
    }
  };
  return (
    <React.Fragment>
      <SideBar onClick={setTubindex} />
      <Grid container>
        <GridWithBorder item xs={3}>
          <List>{renderMenuList()}</List>
        </GridWithBorder>
        <Divider flexItem={false} />
        <Grid item xs={9}>
          <Message room_id={roomId}></Message>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;

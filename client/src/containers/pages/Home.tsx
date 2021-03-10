import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
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
  const onClick = (roomId: string) => {
    setRoomId(roomId);
  };
  return (
    <React.Fragment>
      <SideBar />
      <Grid container>
        <GridWithBorder item xs={3}>
          <List>
            <RoomList></RoomList>
          </List>
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

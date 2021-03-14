import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import FriendList from "../organisms/FriendList";

import RoomList from "../organisms/RoomList";
import Message from "../organisms/Message";
import SideBar from "../organisms/SideBar";
import { styled } from "@material-ui/core/styles";

const GridWithBorder = styled(Grid)({
  borderRight: "1px solid #a6a6a6",
});

interface FriendListIndex {
  sectionKey: number;
  itemKey: number;
}

const Home = (): JSX.Element => {
  const [roomId, setRoomId] = useState<number | null>(null);
  const [tabIndex, setTubindex] = useState(0);
  const [friendIndex, setFriendIndex] = useState<FriendListIndex | null>(null);
  const onClick = (roomId: number) => {
    setRoomId(roomId);
  };
  const onFriendClick = (friend: FriendListIndex): void => {
    setFriendIndex(friend);
  };
  const renderMenuList = (): JSX.Element => {
    if (tabIndex === 0) {
      return (
        <FriendList
          onClick={onFriendClick}
          friendIndex={friendIndex}
        ></FriendList>
      );
    } else {
      return <RoomList onClick={onClick} roomId={roomId}></RoomList>;
    }
  };
  return (
    <React.Fragment>
      <SideBar onClick={setTubindex} />
      <Grid container>
        <GridWithBorder item xs={3}>
          {renderMenuList()}
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

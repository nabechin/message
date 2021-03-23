import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import FriendList from "../organisms/FriendList";
import RoomList from "../organisms/RoomList";
import Message from "../organisms/Message";
import SideBar from "../organisms/SideBar";
import { styled } from "@material-ui/core/styles";
import useToken from "../../hooks/useToken";

const GridWithBorder = styled(Grid)({
  borderRight: "1px solid #a6a6a6",
});

interface FriendListIndex {
  friendId: number;
  sectionKey: number;
  itemKey: number;
}

interface User {
  id: number;
  name: string;
}

interface FriendShip {
  user_id: number;
  friend_id: number;
}

const Home = (): JSX.Element => {
  const [roomId, setRoomId] = useState<number | null>(null);
  const [tabIndex, setTubindex] = useState(0);
  const [friendIndex, setFriendIndex] = useState<FriendListIndex | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const { token, setToken } = useToken();
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get("http://localhost:5000/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data);
    };
    getUser();
  }, []);
  const handleClick = (roomId: number) => {
    setRoomId(roomId);
  };
  const handleFriendClick = (friend: FriendListIndex): void => {
    setFriendIndex(friend);
  };
  const handleCreateTalkClick = (): void => {
    const createRoom = async () => {
      const { data } = await axios.post("http://localhost:5000/rooms", {
        createrId: 1,
        friendId: friendIndex?.friendId,
        headers: { "Content-Type": "application/json" },
      });
      setRoomId(data.roomId);
      // TODO friendListの中から作成したroomのfriendIDよりfriendsからfriendを特定
      // そのpropertyであるroomidを更新する.
      // FriendList内のfriendsをこっちに引っ越す必要が出てきそう。
      // 理由は、特定のfriendを更新するトリガーが子コンポーネントに存在しない。
      // あくまでも、トリガーは非同期によってroomが作られる時
    };
    createRoom();
  };
  const renderMenuList = (): JSX.Element => {
    if (tabIndex === 0) {
      return (
        <FriendList
          onFriendClick={handleFriendClick}
          onClick={handleClick}
          friendIndex={friendIndex}
        ></FriendList>
      );
    } else {
      return <RoomList onClick={handleClick} roomId={roomId}></RoomList>;
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
          <Message
            room_id={roomId}
            user={user}
            onCreateTalkClick={handleCreateTalkClick}
          ></Message>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;

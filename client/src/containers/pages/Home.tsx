import React, { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "../../api";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import FriendList from "../organisms/FriendList";
import RoomList from "../organisms/RoomList";
import Message from "../organisms/Message";
import SideBar from "../organisms/SideBar";
import { styled } from "@material-ui/core/styles";
import useAuth from "../../hooks/useAuth";

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

interface Friend {
  friendId: number;
  name: string;
  roomId: number;
}

const Home = (): JSX.Element => {
  const [roomId, setRoomId] = useState<number>(0);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [tabIndex, setTubindex] = useState(0);
  const [friendIndex, setFriendIndex] = useState<FriendListIndex | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axiosInstance.get("/user/profile", {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
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

  // sidebarをクリックしても、Messageコンポーネントは再レンダリングする必要がない
  // useCallbackとReact.Memoを使うことで、Messageの再レンダリングを抑止している。
  const handleCreateTalkClick = useCallback(() => {
    const createRoom = async () => {
      const { data } = await axiosInstance.post("/rooms", {
        createrId: auth.userId,
        friendId: friendIndex?.friendId,
        headers: { "Content-Type": "application/json" },
      });
      setRoomId(data.roomId);
      friends.map((friend) => {
        if (friend.friendId == friendIndex?.friendId) {
          friend.roomId = data.roomId;
        }
      });
    };
    createRoom();
  }, []);
  const renderMenuList = (): JSX.Element => {
    if (tabIndex === 0) {
      return (
        <FriendList
          onFriendClick={handleFriendClick}
          onClick={handleClick}
          friendIndex={friendIndex}
          friends={friends}
          setFriends={setFriends}
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

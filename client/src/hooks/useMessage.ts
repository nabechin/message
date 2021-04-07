import React, { useState, useEffect, useRef } from "react";
import { axiosInstance } from "../api";

interface Message {
  id: number;
  userId: number;
  username: string;
  content: string;
  image: string;
  contentType: number;
  createAt: string;
}

interface User {
  id: number;
  name: string;
}

interface State {
  messages: Message[];
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setRoomId: React.Dispatch<React.SetStateAction<number | undefined>>;
  onSend: (user: User | null, roomId: number) => void;
  handleChange: (
    roomId: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  messagesEndRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function useMessage(): State {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [roomId, setRoomId] = useState<number>();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const getMessages = async (): Promise<void> => {
      const { data } = await axiosInstance.get(`/messages/${roomId}`);
      setMessages(data);
      scrollToBottom();
    };
    getMessages();
  }, [roomId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
    });
  };
  const onSend = async (user: User | null, roomId: number): Promise<void> => {
    const { data } = await axiosInstance.post("/messages", {
      content: text,
      userid: user?.id,
      roomid: roomId,
      headers: { "Content-Type": "application/json" },
    });
    setMessages((messages) => [...messages, data]);
    scrollToBottom();
    setText("");
  };
  const handleChange = async (
    roomId: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const formData = new FormData();
      formData.append("userId", "1");
      formData.append("roomId", String(roomId));
      formData.append("file", e.target.files[0]);
      const { data } = await axiosInstance.post("/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessages((messages) => [...messages, data]);
      scrollToBottom();
    }
  };
  return {
    messages,
    text,
    setText,
    setRoomId,
    onSend,
    handleChange,
    messagesEndRef,
  };
}

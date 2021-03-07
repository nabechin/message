import { useState } from "react";

interface UserToken {
  access_token: string;
}

interface UseToken {
  setToken: (param: UserToken) => void;
  token: string;
}

export default function useToken(): UseToken {
  const getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userToken = JSON.parse(token);
      return userToken?.access_token;
    }
    return null;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: UserToken): void => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.access_token);
  };

  return {
    setToken: saveToken,
    token: token,
  };
}

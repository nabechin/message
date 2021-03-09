import { useState } from "react";

interface UseToken {
  setToken: (param: { access_token: string }) => void;
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

  const saveToken = (userToken: { access_token: string }): void => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.access_token);
  };

  return {
    setToken: saveToken,
    token: token,
  };
}

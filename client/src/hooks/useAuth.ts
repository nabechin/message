import { useState } from "react";

interface Auth {
  userId: number;
  accessToken: string;
}
interface UseAuth {
  setAuth: (auth: Auth) => void;
  auth: Auth;
}

export default function useAuth(): UseAuth {
  const getAuth = () => {
    const authStr = localStorage.getItem("auth");
    if (authStr) {
      const auth = JSON.parse(authStr);
      return auth;
    }
    return null;
  };
  const [auth, setAuth] = useState(getAuth());

  const saveAuth = (auth: Auth): void => {
    localStorage.setItem("auth", JSON.stringify(auth));
    setAuth(auth);
  };

  return {
    setAuth: saveAuth,
    auth: auth,
  };
}

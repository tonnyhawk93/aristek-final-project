import React, { useState } from "react";
import { TOKEN_FIELD_NAME } from "app/constants";
import authContext from "app/contexts/authContext";

interface AuthProviderProps {
  children: JSX.Element;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setLogin] = useState(
    !!localStorage.getItem(TOKEN_FIELD_NAME)
  );
  const { Provider } = authContext;

  const logIn = () => {
    localStorage.setItem(TOKEN_FIELD_NAME, String(Date.now()));
    setLogin(true);
  };
  const logOut = () => {
    localStorage.removeItem(TOKEN_FIELD_NAME);
    setLogin(false);
  };

  return <Provider value={{ isLoggedIn, logIn, logOut }}>{children}</Provider>;
};

export default AuthProvider;

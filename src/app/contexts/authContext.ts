import { createContext } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

export default createContext<AuthContextProps>({
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
});

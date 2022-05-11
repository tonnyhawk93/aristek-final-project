import { createContext } from "react";

interface AuthProviderProps {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const authContext = createContext<AuthProviderProps>({
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
});

export default authContext;

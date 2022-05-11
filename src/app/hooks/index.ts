import { useContext } from "react";
import AuthContext from "../contexts/authContext";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

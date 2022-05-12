import { useContext } from "react";
import authContext from "../contexts/authContext";

export const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

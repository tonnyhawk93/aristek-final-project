import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "app/hooks";

interface PrivatPathProps {
  children: JSX.Element;
}

const PrivatePath = ({ children }: PrivatPathProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivatePath;

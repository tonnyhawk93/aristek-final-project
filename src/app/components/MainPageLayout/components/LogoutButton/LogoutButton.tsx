import React from "react";
import { Button } from "antd";
import { useAuth } from "app/hooks";

const LogoutButton: React.FC = () => {
  const { logOut } = useAuth();

  return (
    <Button type="default" onClick={logOut}>
      Log out
    </Button>
  );
};

export default LogoutButton;

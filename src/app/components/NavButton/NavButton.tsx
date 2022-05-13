import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  pathTo?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  children = "Back",
  pathTo = "/",
}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(pathTo);

  return (
    <Button type="default" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default NavButton;

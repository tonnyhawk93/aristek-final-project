import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  title?: string;
  pathTo?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  title = "Back",
  pathTo = "/albums",
}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(pathTo);

  return (
    <Button type="default" onClick={handleClick}>
      {title}
    </Button>
  );
};

export default NavButton;

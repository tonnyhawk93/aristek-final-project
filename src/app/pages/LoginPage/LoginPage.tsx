import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "app/hooks";
import { LoginPageLayout, LoginForm } from "./components";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <LoginPageLayout>
      <LoginForm />
    </LoginPageLayout>
  );
};

export default LoginPage;

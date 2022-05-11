import React from "react";
import { Alert } from "antd";

const ErrorMessage = () => {
  return (
    <Alert
      message="Error Text"
      description="Something went wrong"
      type="error"
    />
  );
};

export default ErrorMessage;

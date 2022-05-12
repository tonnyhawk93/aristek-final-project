import React from "react";
import { Spin, Col, Row } from "antd";

const Spinner = () => {
  return (
    <Col className="h-100">
      <Row className="h-100" justify="center" align="middle">
        <Spin size="large" />
      </Row>
    </Col>
  );
};

export default Spinner;

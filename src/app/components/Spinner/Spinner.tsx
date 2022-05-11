import React from "react";
import { Spin, Col, Row } from "antd";

const Spinner = () => {
  return (
    <Col style={{ height: "100%" }}>
      <Row style={{ height: "100%" }} justify="center" align="middle">
        <Spin size="large" />
      </Row>
    </Col>
  );
};

export default Spinner;

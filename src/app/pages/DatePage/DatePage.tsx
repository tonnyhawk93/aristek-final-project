import React from "react";
import { Col, Row } from "antd";
import { MainPageLayout } from "app/components";
import { DateForm } from "./components";

const DatePage = () => {
  return (
    <MainPageLayout title="DatePage">
      <Col className="h-100">
        <Row className="h-100" justify="start" align="top">
          <DateForm />
        </Row>
      </Col>
    </MainPageLayout>
  );
};

export default DatePage;

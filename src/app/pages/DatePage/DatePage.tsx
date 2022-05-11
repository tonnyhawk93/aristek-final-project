import React from "react";
import { Col, Row } from "antd";
import { DateForm, MainPageLayout } from "app/components";

const DatePage = () => {
  return (
    <MainPageLayout title="DatePage">
      <Col style={{ height: "100%" }}>
        <Row style={{ height: "100%" }} justify="start" align="top">
          <DateForm />
        </Row>
      </Col>
    </MainPageLayout>
  );
};

export default DatePage;

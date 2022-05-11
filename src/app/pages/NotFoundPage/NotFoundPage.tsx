import React from "react";
import { Layout, Col, Row } from "antd";
import { NavButton } from "app/components";

const { Content } = Layout;

const NotFoundPage = () => {
  return (
    <Layout>
      <Content style={{ height: "100vh" }}>
        <Col style={{ height: "100%" }}>
          <Row style={{ height: "100%" }} justify="center" align="middle">
            <Col>
              <h1>Страница не найдена</h1>
              <NavButton title="Вернуться на главную" pathTo="/" />
            </Col>
          </Row>
        </Col>
      </Content>
    </Layout>
  );
};

export default NotFoundPage;

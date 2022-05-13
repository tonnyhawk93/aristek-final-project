import React from "react";
import { Layout, Col, Row } from "antd";
import { NavButton } from "app/components";

const { Content } = Layout;

const NotFoundPage = () => {
  return (
    <Layout>
      <Content className="h-100-vh">
        <Col className="h-100">
          <Row className="h-100" justify="center" align="middle">
            <Col>
              <h1>Страница не найдена</h1>
              <NavButton>Вернуться на главную</NavButton>
            </Col>
          </Row>
        </Col>
      </Content>
    </Layout>
  );
};

export default NotFoundPage;

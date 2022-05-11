import React from "react";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

const LoginPageLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Content style={{ height: "100vh" }}>
        <Col style={{ height: "100%" }}>
          <Row style={{ height: "100%" }} justify="center" align="middle">
            {children}
          </Row>
        </Col>
      </Content>
    </Layout>
  );
};

export default LoginPageLayout;

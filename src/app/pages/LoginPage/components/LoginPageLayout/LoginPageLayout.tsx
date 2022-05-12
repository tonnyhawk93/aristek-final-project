import React from "react";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

const LoginPageLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Content className="h-100-vh">
        <Col className="h-100">
          <Row className="h-100" justify="center" align="middle">
            {children}
          </Row>
        </Col>
      </Content>
    </Layout>
  );
};

export default LoginPageLayout;

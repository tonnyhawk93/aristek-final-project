import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { getRootPath } from "../../helpers";
import LogoutButton from "../LogoutButton";

const { Header, Sider, Content } = Layout;

interface MainPageLayoutProps {
  title?: string;
  headerButton?: JSX.Element;
}

const MainPageLayout: React.FC<MainPageLayoutProps> = ({
  children,
  title,
  headerButton,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    { label: "Albums", key: "/albums" },
    { label: "DatePicker", key: "/inputs" },
  ];

  const handleSelect = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout
      hasSider
      style={{
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Sider
        theme="light"
        style={{
          overflow: "auto",
          padding: "12px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Col
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Menu
            mode="inline"
            items={items}
            onSelect={handleSelect}
            defaultSelectedKeys={[getRootPath(pathname)]}
          />
          <Row justify="center">
            <LogoutButton />
          </Row>
        </Col>
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header>
          <Row justify="space-between" align="middle">
            <h1 style={{ color: "white" }}>{title}</h1>
            {headerButton}
          </Row>
        </Header>
        <Content
          style={{
            padding: 24,
            margin: 0,
            height: "100%",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainPageLayout;

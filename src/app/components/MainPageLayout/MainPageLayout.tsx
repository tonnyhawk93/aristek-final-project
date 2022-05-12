import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import cn from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import { getRootPath } from "app/helpers";
import { LogoutButton } from "./components";
import style from "./style.module.css";

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
    <Layout hasSider className={cn(style.layout, "h-100")}>
      <Sider theme="light" className={cn(style.sider, "h-100-vh")}>
        <Col className={cn(style.col, "h-100")}>
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
      <Layout className={style.ml}>
        <Header>
          <Row justify="space-between" align="middle">
            <h1 className={style.colorWhite}>{title}</h1>
            {headerButton}
          </Row>
        </Header>
        <Content className={cn(style.content, "h-100")}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainPageLayout;

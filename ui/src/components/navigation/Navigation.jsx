import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { NavLink } from "react-router-dom";
import "./style.sass";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Navigation = ({ children }) => (
  <Layout>
    <Header className="header">
      <div className="logo">
        <h4>Client Fingerprinting</h4>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Navigation;

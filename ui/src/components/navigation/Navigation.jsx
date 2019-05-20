import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import "./style.sass";

const { Header } = Layout;

const Navigation = ({ children }) => (
  <Layout className="layout">
    <Header className="header">
      <div className="logo">
        <Link to="/#">
          <h4>Client Fingerprinting</h4>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Fingerprint Me</Link>
        </Menu.Item>
      </Menu>
    </Header>
    {children}
  </Layout>
);

export default Navigation;

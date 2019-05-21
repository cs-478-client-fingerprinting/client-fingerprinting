import React from "react";
import { Layout, Menu } from "antd";
import { Fingerprint } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import "./style.sass";

const { Header } = Layout;

const refresh = () => window.location.reload();

const Navigation = ({ children }) => (
  <Layout className="layout">
    <Header className="header">
      <div className="logo">
        <Fingerprint className="icon" />
        <NavLink to="/" onClick={refresh}>
          <h4>Client Fingerprinting</h4>
        </NavLink>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <NavLink to="/">Fingerprint Me</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
    {children}
  </Layout>
);

export default Navigation;

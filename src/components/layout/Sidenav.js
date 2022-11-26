import {
  AppstoreOutlined,
  UserAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";



function Sidenav({ color }) {
  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span> Dashboard</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span className="icon">
              <AppstoreOutlined />
            </span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item className="menu-item-header" key="2">
          Account Pages
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/profile">
            <span className="icon">
              <UserOutlined />
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/sign-in">
            <span className="icon">
              <UserAddOutlined />
            </span>
            <span className="label">Sign In</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/sign-up">
            <span className="icon" style={{ color }}>
              <UserSwitchOutlined />
            </span>
            <span className="label">Sign Up</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidenav;

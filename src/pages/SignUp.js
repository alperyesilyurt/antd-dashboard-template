import React, { Component } from "react";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
} from "antd";
import { Link } from "react-router-dom";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;
export default class SignUp extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <div className="layout-default ant-layout layout-sign-up">
          <Header>
            <div className="header-col header-brand">
              <h5>JelyLabs Dashboard</h5>
            </div>
          </Header>

          <Content className="p-0">
            <div className="sign-up-header">
              <div className="content">
                <Title>Sign Up</Title>
                <p className="text-lg">
                  Use these awesome forms to login or create new account in your
                  project for free.
                </p>
              </div>
            </div>

            <Card
              className="card-signup header-solid h-full ant-card pt-0"
              title={<h5>Register</h5>}
              bordered="false"
            >
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="row-col"
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>
                    I agree the{" "}
                    <a href="#pablo" className="font-bold text-dark">
                      Terms and Conditions
                    </a>
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                  >
                    SIGN UP
                  </Button>
                </Form.Item>
              </Form>
              <p className="font-semibold text-muted text-center">
                Already have an account?{" "}
                <Link to="/sign-in" className="font-bold text-dark">
                  Sign In
                </Link>
              </p>
            </Card>
          </Content>
          <Footer>
            <Menu mode="horizontal">
              <Menu.Item>Company</Menu.Item>
              <Menu.Item>About Us</Menu.Item>
              <Menu.Item>Teams</Menu.Item>
              <Menu.Item>Products</Menu.Item>
              <Menu.Item>Blogs</Menu.Item>
              <Menu.Item>Pricing</Menu.Item>
            </Menu>
            <Menu mode="horizontal" className="menu-nav-social">
              <Menu.Item>
                <Link to="#">{<DribbbleOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<TwitterOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<InstagramOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<GithubOutlined />}</Link>
              </Menu.Item>
            </Menu>
            <p className="copyright">
              {" "}
              Copyright © 2022 by <a href="#pablo">JelyLabs</a>.{" "}
            </p>
          </Footer>
        </div>
      </>
    );
  }
}

import { Row, Col, Card, Button, Descriptions, Avatar, Switch } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  EditOutlined,
} from "@ant-design/icons";
import BgProfile from "../assets/images/bg-profile.jpg";
import profilavatar from "../assets/images/face-1.jpg";

function Profile() {
  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">Alper Yeşilyurt</h4>
                  <p>CEO / Co-Founder</p>
                </div>
              </Avatar.Group>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
        <Col span={24} md={8} className="mb-24 ">
          <Card
            bordered={false}
            className="header-solid h-full"
            title={<h6 className="font-semibold m-0">Platform Settings</h6>}
          >
            <ul className="list settings-list">
              <li>
                <h6 className="list-header text-sm text-muted">ACCOUNT</h6>
              </li>
              <li>
                <Switch defaultChecked />

                <span>Email me when someone follows me</span>
              </li>
              <li>
                <Switch />
                <span>Email me when someone answers me</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Email me when someone mentions me</span>
              </li>
              <li>
                <h6 className="list-header text-sm text-muted m-0">
                  APPLICATION
                </h6>
              </li>
              <li>
                <Switch defaultChecked />
                <span>New launches and projects</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Monthly product updates</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Subscribe to newsletter</span>
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Profile Information</h6>}
            className="header-solid h-full card-profile-information"
            extra={
              <Button type="link">
                <EditOutlined />
              </Button>
            }
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              {" "}
              Hi, I’m Alper, Decisions: If you can’t decide, the answer is no.
              If two equally difficult paths, choose the one more painful in the
              short term (pain avoidance is creating an illusion of equality).{" "}
            </p>
            <hr className="my-25" />
            <Descriptions title="ALPER">
              <Descriptions.Item label="Full Name" span={3}>
                Alper Yeşilyurt
              </Descriptions.Item>
              <Descriptions.Item label="Mobile" span={3}>
                (90) 542 440 4779
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
                alperesilyurt@hotmail.com
              </Descriptions.Item>
              <Descriptions.Item label="Location" span={3}>
                USA
              </Descriptions.Item>
              <Descriptions.Item label="Social" span={3}>
                <a href="#pablo" className="mx-5 px-5">
                  {<TwitterOutlined />}
                </a>
                <a href="#pablo" className="mx-5 px-5">
                  {<FacebookOutlined style={{ color: "#344e86" }} />}
                </a>
                <a href="#pablo" className="mx-5 px-5">
                  {<InstagramOutlined style={{ color: "#e1306c" }} />}
                </a>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Profile;

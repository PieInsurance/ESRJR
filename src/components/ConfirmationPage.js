import React from "react";
import {Row, Col, Icon, Button} from "antd";
import "../styles/confirmationPage.css";

const ConfirmationPage = () => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <div className="page-container">
          <div className="shape"></div>
          <div className="card">
            <div className="icon-container">
              <Icon className="icon" type="mail" theme="twoTone"/>
            </div>
            <h2>Thank you for signing up! Please check your email for a confirmation link.
            </h2>
            <Button type="primary" href="/" className="home-btn">
              Home
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ConfirmationPage;

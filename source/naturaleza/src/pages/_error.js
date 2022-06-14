import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import { Breadcrumb } from "antd";
import Image from 'next/image'
import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";

export default function error() {
  return (
    <LayoutOne title="404 Error">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
          <Link href='/'><a><i className="fas fa-home" />
            Home</a></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>404 Error</Breadcrumb.Item>
        </Breadcrumb>
        <div className="error">
          <Row gutter={50}>
            <Col xs={24} md={12}>
              <div className="error-content">
              <br/>
                <h2>OPPS! THIS PAGE COULD NOT BE FOUND</h2>
                <p>
                  Sorry bit the page you are looking for does not exist or there is some server issue, we are currently working on it. 
                </p>
                <Button type="primary" shape="round">
                  <Link href={"/"}>
                    <a>Go to homepage</a>
                  </Link>
                </Button>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="error-img">
                <Image priority={true}
                  src={
                    "/assets/images/pages/404/1.webp"
                  }
                  layout="fixed" width='100%' height='100%'
                  alt="404 Image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </LayoutOne>
  );
}

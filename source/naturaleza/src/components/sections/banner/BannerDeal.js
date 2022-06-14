import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import Image from 'next/image'

export default function BannerTwo() {
  return (
    <div className="banner-two">
      <Row justify="center">
        <Col md={10}>
          <div className="up-down-anim">
            <Image priority={true}
              src={
                "/assets/images/sections/banner/two/1.webp"
              }
              layout="fixed" width='200px' height='150px'
            />
          </div>
        </Col>
        <Col md={10}>
          <div className="banner-two-content">
            <div className="banner-two-content__discount">
              <h3>
                Healthcare is yet to be
              </h3>
            </div>
            <h3>TRANSFORMED BY TECHNOLOGY</h3>
            <br/>
            <p className="banner-two-content__description">
              -Joshua Kushner
            </p>
            <Button type="primary" shape="round">
              <Link href={"/blog/blogs"}>
                <a href={"/blog/blogs"}>
                  Checkout blogs
                </a>
              </Link>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

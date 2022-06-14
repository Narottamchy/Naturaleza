import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import Image from 'next/image'

function BannerThree({ data }) {
  return (
    <div className="banner-three">
      <Row gutter={30}>
        {data.map((item, index) => (
          <Col key={index} span={12}>
            <div
              className="banner-three-item up-down-anim-hover"
              style={{
                backgroundImage: `url('${
                  item.background
                }')`,
              }}
            >
              <Row gutter={30} justify="center">
                <Col md={10}>
                  <div className="banner-three-image">
                    <Image priority={true} src={item.image} layout="fixed" width='150px' height='100px'/>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="banner-three-content">
                    <div className="banner-three-content__discount">
                      <p><b>
                        {item.title.main}
                        </b></p>
                    </div>
                    <Button type="primary" shape="round">
                      <Link
                        href={item.link}
                      >
                        <a>{item.btn}</a>
                      </Link>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default React.memo(BannerThree);

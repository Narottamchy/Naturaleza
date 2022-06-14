import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import Container from "../../other/Container";
import Image from 'next/image'

function BannerOne({ data }) {
  return (
    <div className="banner-one">
      <Container fluid>
        <Row gutter={[30, 30]}>
          {data.map((item, index) => (
            <Col key={index} sm={24} lg={12}>
              <div
                className="banner-one-item up-down-anim-hover"
                style={{
                  backgroundImage: `url('${
                    item.background
                  }')`,
                }}
              >
                <Row align="middle" justify="space-around">
                  <Col sm={24} md={10}>
                    <div className="banner-one-item__img">
                      <Image priority={true}
                        src={item.image}
                        alt="Introduction image"
                        layout="fixed" width='100%' height='100%'
                      />
                    </div>
                  </Col>
                  <Col sm={24} md={8}>
                    <div className="banner-one-item__content">
                      <p>
                        {item.content.main}
                        <span> {item.content.span}</span>
                      </p>
                      <Button type="primary" shape="round">
                        <Link
                          href={"/product/products"}
                        >
                          <a
                            href={
                              "/product/products"
                            }
                          >
                            Shop now
                          </a>
                        </Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default React.memo(BannerOne);

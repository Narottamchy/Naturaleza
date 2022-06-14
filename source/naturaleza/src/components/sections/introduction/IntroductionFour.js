import React from "react";
import { Col, Row } from "antd";
import classNames from "classnames";
import Image from 'next/image'
import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

import dataA from "../../../data/sections/introduction.json";

const DownOneItem = React.memo(({ reverse, data}) => {
  return (
    <div
      className={`dow-one-content__item ${classNames({ "-reverse": reverse })}`}
    >
      <div className="dow-one-content__item-image">
        <Image priority={true}
          src={data.iconSrc}
          alt="Dale of the week icon"
          layout="fixed" width='50px' height='50px'
        />
      </div>
      <div className="dow-one-content__item-content">
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </div>
    </div>
  );
});

function IntroductionFour() {
  const data = dataA.four;
  return (
    <div className="introduction-four">
      <Container>
        <SectionTitle
          title="Why choose us"
          className="-coffee -title-white -center"
          style={{ marginBottom: 100 / 16 + "em" }}
        />
        <div className="dow-one-content">
          <Row align="center" gutter={15}>
            <Col md={12} lg={8}>
              <Row gutter={[0, 30]}>
                {data.slice(0, 2).map((item, index) => (
                  <Col key={index} span={24}>
                    <DownOneItem reverse data={item} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={0} lg={8}>
              <Image priority={true}
                className="dow-one-image"
                src={
                  "/assets/images/sections/introduction/four/img.webp"
                }
                alt="Introduction image"
                layout="fill" 
              />
            </Col>
            <Col md={12} lg={8}>
              <Row gutter={[0, 30]}>
                {data.slice(2, 4).map((item, index) => (
                  <Col key={index} span={24}>
                    <DownOneItem data={item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(IntroductionFour);

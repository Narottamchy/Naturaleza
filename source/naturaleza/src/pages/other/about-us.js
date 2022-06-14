import { Breadcrumb, Row, Col, Button } from "antd";
import React from "react";
import CountUp from "react-countup";
import Image from 'next/image'
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";
import IntroductionFour from "../../components/sections/introduction/IntroductionFour";
import Introduction from "../../components/sections/introduction/Introduction";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import data from "../../data/pages/about.json";
import Link from 'next/link';

function aboutUs() {
  return (
    <LayoutOne title="About us">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
          <Link href='/'><a><i className="fas fa-home" />
            Home</a></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>About us</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="about">
        <Container>
          <div className="about-story">
            <Row gutter={40}>
              <Col xs={24} sm={12}>
                <div className="about-story__content">
                  <SectionTitle title="The Story About Us" className="-left" />
                  <p>
                  Naturaleza is an organic tech company trying to educate everyone about organic products and help them buy the right products. 
                  </p><p>
                  Wait is that all about us no we also share some of the tasty recipes and blogs for everyone.</p><p> We are trying to make some revolution in organic technology.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <div className="about-story__video">
                  <Image priority={true}
                    src={"/assets/images/pages/contact/vid.webp"}
                    alt="introduction image"
                    layout="responsive" width='400px' height='300px'
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="about-statistical">
            <Row gutter={[30, 30]}>
              {data.statistical.map((item) => (
                <Col key={data.id} xs={24} md={8}>
                  <div className="about-statistical__item">
                    <div className="about-statistical__item-icon">
                      <Image priority={true}
                        src={item.icon}
                        alt="Statistcal icon"
                        layout="fixed" width='75px' height='75px'
                      />
                    </div>
                    <div className="about-statistical__item-data">
                      <CountUp start={0} end={item.number} delay={0}>
                        {({ countUpRef }) => (
                          <div className="about-statistical__item-data__countup">
                            {item.prefix && <span>{item.prefix}</span>}
                            <h3 ref={countUpRef} />
                            {item.suffixes && <span>{item.suffixes}</span>}
                          </div>
                        )}
                      </CountUp>
                      <p>{item.object}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <div className="about-introduction">
          <IntroductionFour/>
          <Introduction />
        </div>
          <PartnerOne />
      </div>
    </LayoutOne>
  );
}

export default React.memo(aboutUs);

import React from "react";
import SectionTitle from "../../other/SectionTitle";
import Container from "../../other/Container";
import { Col, Row } from "antd";

const data = [
  {
    name: "Narottam Choudhary",
    job: "CEO, tech head",
    image: "/assets/images/sections/introduction/six/1.webp",
  },
  {
    name: "Tisha Thakral",
    job: "Reseach head",
    image: "/assets/images/sections/introduction/six/2.webp",
  },
  {
    name: "Abhishek",
    job: "Management Head",
    image: "/assets/images/sections/introduction/six/3.webp",
  },
  {
    name: "Harmeet Kaur Kapoor",
    job: "Social media manager",
    image: "/assets/images/sections/introduction/six/4.webp",
  },
];

const IntroductionSix = () => {
  return (
    <div className="introduction-six">
      <Container>
        <SectionTitle title="We are team" className="-center" />
        <div className="introduction-six-content">
          <Row gutter={[30, 30]}>
            {data.map((item) => (
              <Col key={data.id} xs={12} sm={12} md={6}>
                <div
                  className="introduction-six-content__item"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <main>
                    <h3>{item.name}</h3>
                    <h5>{item.job}</h5>
                  </main>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default IntroductionSix;

import { Breadcrumb, Row, Col, Form, Input, Button } from "antd";
import React from "react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";
import Link from 'next/link';

function ContactUs() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_okxg52w",
        "template_ve2fp6j",
        formRef.current,
        "XhzFyRT2TSOnOjVfi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutOne title="Contact us">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
          <Link href='/'><a><i className="fas fa-home" />
            Home</a></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Contact us</Breadcrumb.Item>
        </Breadcrumb>
        <div className="contact">
          <br/>
          <div className="contact-methods">
          <br/>
            <Row gutter={15}>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-map-marker-alt" />
                  <p>Currently Online</p>
                  <p>New Delhi</p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-envelope" />
                  <p>
                    <span>Phone:</span> +91 8810217638
                  </p>
                  <p>
                    <span>Mail:</span> info.in.naturaleza@gmail.com
                  </p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-clock" />
                  <p>
                    <span>Week Days:</span> 10:00 – 18:00
                  </p>
                  <p>
                    <span>Sunday:</span> Close
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="contact-form">
            <div className="contact-form__title">
              <SectionTitle
                hideDecoration
                title="Leave Message"
                className="-center"
              />
              <p>Our team will contact you later and answer your questions.</p>
            </div>
            <form
            name="review"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onSubmit={handleSubmit}
            ref={formRef}>
              <Row gutter={30}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input placeholder="Name" type="text"
              name="user_name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input type="email"
              placeholder="Email"
              name="user_email"/>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="message">
                    <Input.TextArea placeholder="Message"
              name="message" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" shape="round">
                      Send Message
                    </Button>{done && "Thank you..."}
                  </Form.Item>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </Container>
    </LayoutOne>
  );
}

export default React.memo(ContactUs);

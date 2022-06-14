import React from "react";
import { Row, Col } from "antd";
import classNames from "classnames";

import Container from "../other/Container";
import FooterQuickLinks from "./elements/FooterQuickLinks";
import FooterInfomation from "./elements/FooterInfomation";
import FooterSubcribeInput from "./elements/FooterSubcribeInput";

function Footer({ containerFluid, className }) {
  return (
    <div className={`footer -style-one ${classNames(className)}`}>
      <div className="footer-top">
        <Container fluid={containerFluid}>
          <Row gutter={15}>
            <Col xs={24} md={9} lg={8}>
              <FooterInfomation />
            </Col>
            <Col xs={24} md={15} lg={16}>
              <FooterQuickLinks colSize={{ span: 8 }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-subcribe">
        <Container>
          <Row align="center">
            <Col xs={24} md={14}>
              <div className="footer-subcribe__content">
                <h5>Join Our Newsletter Now</h5>
                <p>
                Get E-mail updates about the latest organic products and get complete information.
                </p>
              </div>
            </Col>
            <Col xs={24} md={10}>
              <FooterSubcribeInput/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom__wrapper">
            <p>Copyright © 2022 Naturaleza - All Rights Reserved.</p>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default React.memo(Footer);

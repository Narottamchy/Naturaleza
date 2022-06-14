import React from "react";
import Link from "next/link";
import MenuOne from "./menu/MenuOne";
import FunctionMenuOne from "./function-menu/FunctionMenuOne";
import { Row, Col } from 'antd';
import Image from 'next/image'

export default function HeaderOne() {
  return (
  <Row justify="center" align="middle">
    <Col  justify="center" flex="150px">
        <Link href={"/"}>
            <a className="menu-logo">
              <Image priority={true}
                src={"/assets/images/logo.webp"}
                alt="Naturaleza logo"
                layout="responsive" width='110px' height='100px'
              />
            </a>
          </Link>
    </Col>
    <Col flex="auto">
      <Row>
      <Col span={24}>
        <MenuOne />
        </Col>
      </Row>
      <Row justify="centre" >
        <Col span={24}>
       <FunctionMenuOne activeCollapse={true} />
       </Col>
      </Row>
    </Col>
</Row>
  );
}

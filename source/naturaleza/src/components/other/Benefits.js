import React from "react";
import { Row, Col } from "antd";
import classNames from "classnames";
import Image from 'next/image'
import benefitsData from "../../data/benefits.json";

function Benefits({ containerFluid, column, threeCol, style, className }) {
  const renderCol = () => {
    return threeCol
      ? { xs: 24, md: 8 }
      : column
      ? { xs: 24, sm: 12, md: 6, lg: 24 }
      : { xs: 24, md: 6 };
  };
  const col = renderCol();
  return (
    <div
      className={`benefits ${classNames(className, { "-column": column })}`}
      style={style}><div className="blog-sidebar-section__header">
      <h5>Benefits</h5>
    </div>
      <div className="benefits-wrapper">
        <Row gutter={10}>
          {benefitsData
            .slice(0, threeCol ? 3 : benefitsData.length)
            .map((item, index) => (
              <Col key={index} {...renderCol()}>
                <div className="benefits-item">
                  <Image priority={true}
                    className="benefits-item__image"
                    src={item.iconSrc}
                    alt="Benefit icon"
                    layout="fixed" width='100px' height='100px'
                  />
                  <h5 className="benefits-item__title">{item.name}</h5>
                  <p className="benefits-item__description">
                    {item.description}
                  </p>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default React.memo(Benefits);

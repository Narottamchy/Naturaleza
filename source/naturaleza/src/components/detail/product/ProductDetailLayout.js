import React from "react";

import ProductDetailImages from "./elements/ProductDetailImages";
import ProductDetailContent from "./elements/ProductDetailContent";
import { Col, Row } from "antd";
import ProductDetailTab from "./elements/ProductDetailTab";

function ProductDetailLayout({ data, hideTab, style }) {
  return (
    <div className="product-detail" style={style}>
      <Row gutter={30}>
        <Col md={10}>
          <ProductDetailImages type="column" images={data.images} />
        </Col>
        <Col md={14}>
          <ProductDetailContent type="fluid" data={data} />
        </Col>
        <Col md={24}>
          {!hideTab && (
            <ProductDetailTab
            data={data}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(ProductDetailLayout);

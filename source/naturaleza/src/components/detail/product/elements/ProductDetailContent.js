import { Col, Button, Row} from "antd";
import React from "react";

export default function ProductDetailContent({ data, type, href }) {
  if (type === "fluid") {
    return (
      <div className="product-detail-content -wide">
        <br/>
        <Row>
          <Col xs={24} sm={24} xl={16}>
            <div className="product-detail-content__left">
              <h5 className="product-type">{data.category}</h5>
              <h1 className="product-detail-content__name">{data.name}</h1>
              <Button
              href={data.buylink}
              target="_blank"
              rel="noreferrer"
                  shape="round"
                  style={{backgroundColor:"rgb(25 88 225)",margin:"5px",color:"#fff"}}
                >
                  <b>Want To Buy Best Brand {data.name}</b>
                </Button>
              <div className="product-detail-content__description">
                {data.fullDescription}
                <h1 className="post-detail-title"><b><br/>
                {data.why}</b>
                </h1>
                <br/>
                <h2 className="post-detail-subtitle"><b>
                  {data.topic1}</b>
                </h2>
                <p className="post-detail-paragraph">
                {data.explain1}
                </p><br/>
                <h2 className="post-detail-subtitle"><b>
                  {data.topic2}</b>
                </h2>
                <p className="post-detail-paragraph">
                {data.explain2}
                </p><br/>
                <h2 className="post-detail-subtitle"><b>
                  {data.topic3}</b>
                </h2>
                <p className="post-detail-paragraph">
                {data.explain3}
                </p><br/>
                <h2 className="post-detail-subtitle"><b>
                  {data.topic4}
                  </b>
                </h2>
                <p className="post-detail-paragraph">
                {data.explain4}
                </p>
              </div>
              <ul className="product-detail-content__meta">
                <li>
                  <span>Categories: </span> {data.category}
                </li>
                <li>
                  <span>Tag:</span> {data.tag.map((item, index) => (
            <i key={index}>{item} </i>
          ))}
                </li>
              </ul>
              <div className="product-detail-content__share">
                </div>
            </div>
          </Col>
          <Col xs={24} sm={24} xl={8}>
            <div className="product-detail-content__right">

              <ul className="product-detail-content__benefits">
                <br/>
              <h2><b>Did you know😉</b></h2><br/>
              <Button
              href={data.buylink}
              target="_blank"
              rel="noreferrer"
                  shape="round"
                  style={{backgroundColor:"#b0ff7a",margin:"5px"}}
                >
                  <b>Best Buy Product</b>
                </Button><div></div><br/>
                <p>We already found the perfect product and it's brand just for you</p>
                <li>100% Information</li>
                <li>Recommended by specialist</li>
                <li>99.9% Side effects FREE!!!</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div className="product-detail-content">
    </div>
  );
}

React.memo(ProductDetailContent);

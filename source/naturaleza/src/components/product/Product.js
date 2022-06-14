import React, { useState } from "react";
import { Button, Rate, Tooltip, Modal } from "antd";
import Link from "next/link";
import classNames from "classnames";
import Image from 'next/image'

import { formatCurrency } from "../../common/utils";
import ProductDetailLayout from "../detail/product/ProductDetailLayout";

function Product({ data, className, type, countdownLast = 100000000 }) {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };
  const onModalClose = () => {
    setModalVisible(false);
  };
  const rederProductType = (type) => {
    switch (type) {
      case "tiny":
        return (
          <div className={`product-tiny ${classNames(className)}`}>
            <div className="product-tiny-img">
              <Link
                href={`/product/info/[slug]`}
                as={`/product/info/${data.slug}`}
              >
                <a title={data.name}>
                  <Image priority={true} src={data.coverImage} alt="Product image" layout="fixed" width='90px' height='60px'/>
                </a>
              </Link>
            </div>
            <div className="product-tiny-content">
              <Link
                href={`/product/info/[slug]`}
                as={`/product/info/${data.slug}`}
              >
                <a className="product-tiny-name" title="Pure Pineapple">
                  {data.name}
                </a>
              </Link>
              <h3 className="product-tiny-price">
                {data.discount
                  ? formatCurrency(data.price - data.discount)
                  : formatCurrency(data.price)}
                {data.discount && <del>{formatCurrency(data.price)}</del>}
              </h3>
            </div>
          </div>
        );
      case "dale":
        return (
          <div className={`product-dale ${classNames(className)}`}>
            <div className="product-dale-img">
              <Link
                href={`/product/info/[slug]`}
                as={`/product/info/${data.slug}`}
              >
                <a title={data.name}>
                  <Image priority={true} src={data.coverImage} alt="Product image" layout="fixed" width='150px' height='150px'/>
                </a>
              </Link>
            </div>
            <div className="product-dale-content">
              <h5 className="product-dale-type">{data.category}</h5>
              <Link
                href={`/product/info/[slug]`}
                as={`/product/info/${data.slug}`}
              >
                <a className="product-dale-name" title="Pure Pineapple">
                  {data.name}
                </a>
              </Link>
              <h3 className="product-dale-price">
                {data.discount
                  ? formatCurrency(data.price - data.discount)
                  : formatCurrency(data.price)}
                {data.discount && <del>{formatCurrency(data.price)}</del>}
              </h3>
            </div>
            <div className="product-dale-select">
              <Tooltip title="Quick view">
                <Button
                  onClick={showModal}
                  className="product-btn"
                  type="primary"
                  shape="round"
                  icon={<i className="far fa-eye" />}
                />
              </Tooltip>
            </div>
          </div>
        );
      case "list":
        return (
          <div className="product-list">
            <div className="product-img">
              <Link
                href={`/product/info/[slug]`}
                as={`/product/info/${data.slug}`}
              >
                <a title={data.name}>
                  <Image priority={true} src={data.coverImage} alt="Product image" layout="responsive" width='150px' height='150px'/>
                </a>
              </Link>
              <Button type="primary" onClick={showModal}>
                Quick view
              </Button>
            </div>
            <div className="product-list-content">
              <h5 className="product-type">{data.category}</h5>
              <Link
                href={`/product/info/[slug]`}
                as={`/product/info/${data.slug}`}
              >
                <a className="product-name" title="Pure Pineapple">
                  {data.name}
                </a>
              </Link>
              <Rate
                className="product-rate"
                disabled
                defaultValue={data.rate}
              />
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor niam
              </p>
              {data.quantity > 0 ? (
                <h5 className="product-availability -instock">
                  Availability: <span> {data.quantity} in stock</span>
                </h5>
              ) : (
                <h5 className="product-availability -outstock">
                  Availability: <span> Out stock</span>
                </h5>
              )}
            </div>
            <div className="product-list-actions">
              <h3 className="product-detail-content__price">
                {data.discount && <del>{formatCurrency(data.price)}</del>}
                <div className="product-detail-content__price-discount">
                  <h5>
                    {data.discount
                      ? formatCurrency(data.price - data.discount)
                      : formatCurrency(data.price)}
                  </h5>
                </div>
              </h3>
            </div>
          </div>
        );
      default:
        return (
          <div className={`product ${classNames(className)}`}>
            <div className="product-img">
              <Link
                href={`/product/info/[slug]`}
                as={`/product/info/${data.slug}`}
              >
                <a title={data.name}>
                  <Image priority={true} src={data.coverImage} alt="Product image" layout="fixed" width='150px' height='150px'/>
                </a>
              </Link>
            </div>
            <div className="product-content">
              <h5 className="product-type">{data.category}</h5>
              <Link
                href={`/product/info/[slug]`}
                as={`/product/info/${data.slug}`}
              >
                <a className="product-name" title="Pure Pineapple">
                  {data.name}
                </a>
              </Link>
              <Link href={`/product/info/[slug]`} as={`/product/info/${data.slug}`}><a>
              <p className="product-price">
                View
              </p></a>      
              </Link>        
            </div>
            <div className="product-select">
              <Tooltip title="Quick view">
                <Button
                  onClick={showModal}
                  className="product-btn"
                  type="primary"
                  shape="round"
                  icon={<i className="far fa-eye" />}
                />
              </Tooltip>
              <Tooltip title="Quick Buy">
                <Link href={data.buylink}>
                <a target="_blank" rel="noreferrer"><Button
                  className="product-btn"
                  target="_blank"
                  shape="round"
                  title="Quick Buy"
                  icon={<i className="far fa-rupee-sign" />}
                ></Button></a></Link>
              </Tooltip>
            </div>
          </div>
        );
    }
  };
  return (
    <>
      {rederProductType(type)}
      <Modal
        visible={modalVisible}
        onCancel={onModalClose}
        footer={null}
        header={null}
        width={860}
      >
        <ProductDetailLayout style={{ marginBottom: 0 }} hideTab data={data} />
      </Modal>
    </>
  );
}

export default React.memo(Product);

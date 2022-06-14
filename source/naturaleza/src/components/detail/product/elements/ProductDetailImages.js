import React, { useState } from "react";
import Slider from "react-slick";
import classNames from "classnames";
import Image from 'next/image'

function ProductDetailImages({ type, images }) {
  const slider1Settings = {
    arrows: false,
  };
  const slider2Settings = {
    arrows: false,
    slidesToShow: 3,
    focusOnSelect: true,
    vertical: type === "column" ? true : false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: type === "column" && false,
        },
      },
    ],
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <div
      className={`product-detail-images ${classNames({
        "-column": type === "column",
      })}`}
    >
      <div className="product-detail-images-big">
        <Slider asNavFor={nav2} ref={(c) => setNav1(c)} {...slider1Settings}>
          {images &&
            images.map((img, index) => (
              <div key={index} className="slide-item">
                <Image priority={true} src={img} alt="Product image" layout="responsive" width='100%' height='100%'/>
              </div>
            ))}
        </Slider>
      </div>
      <div className="product-detail-images-small">
        <Slider asNavFor={nav1} ref={(c) => setNav2(c)} {...slider2Settings}>
          {images &&
            images.map((img, index) => (
              <div key={index} className="slide-item">
                <Image priority={true} src={img} alt="Product image" layout="fixed" width='100%' height='100%'/>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default React.memo(ProductDetailImages);

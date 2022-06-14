import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "antd";
import Slider from "react-slick";
import Link from "next/link";
import classNames from "classnames";
import Image from 'next/image';
import { NextArrow, PrevArrow } from "../../other/SliderArrow";
import Container from "../../other/Container";

function HeroSliderOne({ data }) {
  const [currentSlideIndex, setNextSlideIndex] = useState(0);
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const beforeChange = (oldIndex, newIndex) => {
    setNextSlideIndex(newIndex);
  };
  useEffect(() => {
    const currentSlide = document.querySelector(
      `.hero-slider.-style-one .slick-slide[data-index="${currentSlideIndex}"]`
    );
    const animationItems = currentSlide.querySelectorAll("[data-animation]");
    animationItems.forEach((item, index) => {
      const animationName = item.dataset.animation;
      const animationDelay = item.dataset.delay;
      console.log(animationName);
      item.classList.add("animate__animated", animationName);
      item.style.animationDelay = animationDelay + "s";
      item.addEventListener("animationend", function () {
        this.classList.remove("animate__animated", animationName);
        this.removeEventListener("animationend", function () {
          return;
        });
      });
    });
  }, [currentSlideIndex]);

  return (
    <div className="hero-slider -carousel -style-one">
      <Slider
        beforeChange={beforeChange}
        className="arrow-center"
        {...settings}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`slick-slider-item ${classNames({
              active: index === currentSlideIndex,
            })}`}
          >
            <div className="hero-slider-background">
              <Image priority={true}
                src={item.background}
                alt="Hero slider background image"
                layout="fill"
              />
            </div>
            <Container>
              <div className="hero-slider-content-wrapper">
                <Row align="middle" gutter={30}>
                  <Col sm={12}>
                    <div className="hero-slider-content">
                      <h3 data-animation="animate__fadeInDown">
                        {item.subTitle}
                      </h3>
                      <h1 data-delay="0.2" data-animation="animate__fadeInDown">
                        {item.title}
                      </h1>
                      <Button
                        data-delay="0.6"
                        data-animation="animate__fadeInDown"
                        type="primary"
                        shape="round"
                      >
                        <Link
                          href={"/product/products"}
                        >
                          <a>Check Natural Products</a>
                        </Link>
                      </Button>
                    </div>
                  </Col>
                  <Col sm={12}>
                    <div
                      data-delay="0.8"
                      data-animation="animate__zoomInRight"
                      className="hero-slider-image"
                    >
                      <Image priority={true}
                        src={item.animate}
                        alt="Hero slider image"
                        layout="responsive" width='100%' height='100%'
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default React.memo(HeroSliderOne);

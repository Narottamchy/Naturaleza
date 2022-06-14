import React from "react";
import Container from "../../other/Container";
import SocialIcons from "../../other/SocialIcons";
import Link from "next/link";

export default function TopNavOne({ containerFluid }) {
  return (
    <div className="top-nav-one">
      <Container fluid={containerFluid}>
        <div className="top-nav-one-wrapper">
          <div className="top-nav-one-left">
            <ul>
              <li>
                <i className="fas fa-envelope" />
                naturaleza088@gmail.com
              </li>
              <li>
                <i className="fas fa-phone-alt" />
                +91 8810260027
              </li>
            </ul>
          </div>
          <div className="top-nav-one-right">
            <div className="top-nav-one-right__item">
              <SocialIcons sharein="https://www.instagram.com/naturaleza.in/" sharefb="https://www.facebook.com/Naturaleza-104571368960500"/>
            </div>
            <div className="top-nav-one-right__item">
              <Link href={"/auth/login"}>
                <a>
                  <i className="fas fa-user" />
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

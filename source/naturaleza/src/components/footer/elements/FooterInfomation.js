import React from "react";
import Link from "next/link";
import Image from 'next/image'
import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={"/"}>
        <a className="footer-info__logo">
          <Image priority={true}
            src={"/assets/images/logo.webp"}
            alt="Naturaleza Logo"
            layout="fixed" width='130px' height='130px'
          />
        </a>
      </Link>
      <ul>
        <li>Address: Currently Online, Delhi, India</li>
        <li>Phone: +91 8810217638</li>
        <li>Email: info.in.naturaleza@gmail.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" sharein="https://www.instagram.com/naturaleza.in/" sharefb="https://www.facebook.com/Naturaleza-104571368960500"/>
    </div>
  );
}

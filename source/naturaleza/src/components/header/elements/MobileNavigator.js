import React, { useState } from "react";
import { Menu } from "antd";

import navigatorData from "../../../data/navigator.json";
import Link from "next/link";
import SocialIcons from "../../other/SocialIcons";

function MobileNavigator() {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="menu-mobile">
      <Menu
        className="menu-mobile-navigator"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="inline"
      >
        <Menu.Item key="homepage">
          <Link href={navigatorData.HOME.href}>
            <a
              rel="noopener noreferrer"
            >
              {navigatorData.HOME.title}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="shop">
          <Link href={navigatorData.SHOP.href}>
            <a
              rel="noopener noreferrer"
            >
              {navigatorData.SHOP.title}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link href={navigatorData.BLOG.href}>
            <a
              rel="noopener noreferrer"
            >
              {navigatorData.BLOG.title}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link href={navigatorData.ABOUT.href}>
            <a
              rel="noopener noreferrer"
            >
              {navigatorData.ABOUT.title}
            </a>
          </Link>
        </Menu.Item>
        <SubMenu key="pages" title={navigatorData.PAGES.title}>
          {navigatorData.PAGES.subMenu.map((item) => (
            <Menu.Item key={item.title}>
              <Link href={item.href}>
                <a> {item.title}</a>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
      <div className="menu-mobile-functions">
        <SocialIcons sharein="https://www.instagram.com/naturaleza.in/" sharefb="https://www.facebook.com/Naturaleza-104571368960500"/>
      </div>
    </div>
  );
}

export default React.memo(MobileNavigator);

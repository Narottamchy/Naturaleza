import React from "react";

import navigatorData from "../../../data/navigator.json";
import Link from "next/link";

function Navigator() {
  return (
    <ul className="navigation">
      <li className="navigation-item">
        <Link href={navigatorData.HOME.href}>
          <a className="navigation-item__title">{navigatorData.HOME.title}</a>
        </Link>
      </li>
      <li className="navigation-item">
        <Link href={navigatorData.SHOP.href}>
          <a className="navigation-item__title">{navigatorData.SHOP.title}</a>
        </Link>
      </li>
      <li className="navigation-item">
        <Link href={navigatorData.BLOG.href}>
          <a className="navigation-item__title">{navigatorData.BLOG.title}</a>
        </Link>
      </li>
      <li className="navigation-item">
        <Link href={navigatorData.ABOUT.href}>
          <a className="navigation-item__title">{navigatorData.ABOUT.title}</a>
        </Link>
      </li>
      <li className="navigation-item -toggleable">
        <Link href={navigatorData.PAGES.href}>
          <a className="navigation-item__title">{navigatorData.PAGES.title}</a>
        </Link>
        <ul className="navigation-item__submenu">
          {navigatorData.PAGES.subMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

export default React.memo(Navigator);

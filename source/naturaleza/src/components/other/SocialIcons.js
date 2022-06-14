import React from "react";
import classNames from "classnames";
import { Button } from "antd";

export default function SocialIcons({ className, type = "link", shape ,sharein, sharefb }) {
  return (
    <ul className={`social-icons ${classNames(className)}`}>
      <li>
        <Button type={type} shape={shape} target="_blank" rel="noreferrer" href={sharein}>
          <i className="fab fa-instagram"></i>
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} target="_blank" rel="noreferrer" href={sharefb}>
          <i className="fab fa-facebook-f"></i>
        </Button>
      </li>
    </ul>
  );
}

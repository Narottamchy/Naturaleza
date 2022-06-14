import React from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

let categories = [
  { name: "Fresh Meat", href: "/product/products" },
  { name: "Vegetables", href: "/product/products" },
  { name: "Fruit & Nut Gifts", href: "/product/products" },
  { name: "Fresh Berries", href: "/product/products" },
  { name: "Ocean Foods", href: "/product/products" },
  { name: "Butter & Eggs", href: "/product/products" },
  { name: "Fastfood", href: "/product/products" },
  { name: "Fresh Onion", href: "/product/products" },
  { name: "Papayaya & Crisps", href: "/product/products" },
  { name: "Oatmeal", href: "/product/products" },
  { name: "Fresh Bananas", href: "/product/products" },
];

function CategoryColappse({ active }) {
  const { Panel } = Collapse;
  return (
    <div className="category-collapse">
      <Collapse
        bordered={false}
        defaultActiveKey={active ? "1" : null}
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? -180 : 0} />
        )}
        expandIconPosition="right"
      >
        <Panel
          header="All departments"
          key="1"
          extra={<i className="far fa-bars" />}
        >
          <ul>
            {categories.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
}

export default React.memo(CategoryColappse);

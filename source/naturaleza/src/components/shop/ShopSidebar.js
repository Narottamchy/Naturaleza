import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import {
  setCurrentCategory
} from "../../redux/actions/shopFilterActions";
import categories from "../../data/categories.json";


const ShopSidebarSection = ({ children, title, className }) => {
  return (
    <div className={`shop-sidebar-section ${classNames(className)}`}>
      <div className="shop-sidebar-section__header">
        <h5>{title}</h5>
      </div>
      <div className="shop-sidebar-section__content">{children}</div>
    </div>
  );
};

function ShopSidebar({ style }) {
  const dispatch = useDispatch();
  const shopFilterState = useSelector((state) => state.shopFilterReducer);
  const { category } = shopFilterState;
  const onChooseCategory = (e, val) => {
    e.preventDefault();
    dispatch(setCurrentCategory(val));
  };
  
  return (
    <div style={style} className="shop-sidebar">
      <ShopSidebarSection className="-departments" title="Departments">
        <ul>
          <li className={classNames({ active: category === "" })}>
            <a onClick={(e) => onChooseCategory(e, "")} href="#">
              All departments
            </a>
          </li>
          {categories.map((item, index) => (
            <li
              className={classNames({ active: category === item.value })}
              key={index}
            >
              <a onClick={(e) => onChooseCategory(e, item.value)} href="#">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </ShopSidebarSection>
    </div>
  );
}

export default React.memo(ShopSidebar);

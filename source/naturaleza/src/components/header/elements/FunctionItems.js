import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

import { formatCurrency } from "../../../common/utils";
import { calculateTotalPrice } from "../../../common/shopUtils";

function FunctionItems({ hideTotal, hideWishlist }) {
  const cartState = useSelector((state) => state.cartReducer);
  return (
    <div className="function-items">
      {!hideWishlist && (
        <Link href={"/shop/wishlist"}>
          <a className="function-items-item">
            <i className="icon_heart_alt" />
          </a>
        </Link>
      )}
      <li className="navigation-item -toggleable">
        <Link href={"/shop/cart"}>
          <a className="function-items-item">
            <i className="icon_bag_alt" />

            {!hideTotal &&
              (cartState.data ? (
                <span>
                  {formatCurrency(calculateTotalPrice(cartState.data))}
                </span>
              ) : (
                <span>{formatCurrency(0)}</span>
              ))}
          </a>
        </Link>
       
      </li>
    </div>
  );
}

export default React.memo(FunctionItems);

import React, { useContext } from "react";
import { DataContext } from "../context/context";
import {
  CartHero,
  AboutFilter
} from "../components/home_components/HeroComponentStyles";

export default function Shopping_Cart_Page() {
  const [, , menuToggles] = useContext(DataContext);
  const bg_url =
    "url(../../resources/page-images/images/storeBcg.jpeg) center/cover no-repeat;";

  console.log(menuToggles.cart.get);
  console.log(menuToggles.totalPrice.get);
  return (
    <div className="shopping">
      {" "}
      <CartHero bg={bg_url}>
        <AboutFilter />
      </CartHero>
      <div className="filter-section">
        <p className="product-title">Cart Items</p>
        <div className="product-border"></div>
      </div>
      <div className="cart-items-section">
        <div className="cart-items">
          <div className="cart-items-headers">
            <div>products</div>
            <div>name of product</div>
            <div>price</div>
            <div>quantity</div>
            <div>remove</div>
            <div>total</div>
          </div>
          <div className="cart-items-list">

          </div>

        </div>
      </div>
    </div>
  );
}

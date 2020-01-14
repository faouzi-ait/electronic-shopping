import React, { useContext } from "react";
import { DataContext } from "../context/context";
import {
  CartHero,
  AboutFilter
} from "../components/home_components/HeroComponentStyles";

export default function Shopping_Cart_Page() {
  const [, , , methods, cartItems] = useContext(DataContext);
  const bg_url =
    "url(../../resources/page-images/images/storeBcg.jpeg) center/cover no-repeat;";

  const totalAftertax =
    methods.taxAmount(cartItems.totalPrice.get) + cartItems.totalPrice.get;

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
          {cartItems.totalPrice.get ? (
            <div className="cart-items-headers">
              <div>products</div>
              <div>item</div>
              <div>price</div>
              <div>quantity</div>
              <div>remove</div>
              <div>total</div>
            </div>
          ) : (
            ""
          )}
          <div className="cart-items-headers cart-items-list">
            {/* SHOPPING CART LISTING HERE */}
          </div>
          <div className="cart-total">
            {cartItems.totalPrice.get ? (
              <>
                <p>Subtotal : ${cartItems.totalPrice.get}</p>
                <p>Tax : ${methods.taxAmount(cartItems.totalPrice.get)}</p>
                <p>Total : ${totalAftertax}</p>
              </>
            ) : (
              "No items in your cart"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

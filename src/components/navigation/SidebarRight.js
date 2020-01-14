import React, { useEffect, useContext } from "react";
import { DataContext } from "../../context/context";
import { RightNavContainer } from "./SidebarRightStyles";
import { findProductById } from "../../utils/Utils";
import { NavLink } from "react-router-dom";
import { Image, ItemTitle, ItemCount } from "./SidebarRightStyles";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function SidebarRight() {
  const [, , , methods, cartItems] = useContext(DataContext);
  const url_image = "./resources/product-images/img/";

  useEffect(_ => methods.total());

  const addQuantity = e => {
    const id = Number(e.target.dataset.id);
    const product = findProductById(cartItems.cart.get, id);

    product.quantity = product.quantity + 1;
    product.total = product.quantity * product.fields.price;
    methods.total();
  };

  const minusQuantity = e => {
    const id = Number(e.target.dataset.id);
    methods.minusQuantity(id);
  };

  const deleteItem = e => {
    const id = Number(e.target.dataset.id);
    methods.removeFromCart(id);
  };

  return (
    <RightNavContainer>
      {cartItems.cart.get.map((item, index) => (
        <div key={index}>
          <Image
            src={`${url_image}${item.fields.image.fields.file.url}`}
            alt="photo"
          />
          <ItemTitle>{item.fields.title}</ItemTitle>
          <ItemCount>
            Qty: {item.quantity}{" "}
            <button
              onClick={addQuantity}
              data-id={item.fields.id}
              className="cart-btn"
            >
              +
            </button>
            <button
              onClick={minusQuantity}
              data-id={item.fields.id}
              className="cart-btn"
            >
              -
            </button>
            <button
              onClick={deleteItem}
              data-id={item.fields.id}
              className="cart-btn"
            >
              x
            </button>
          </ItemCount>
        </div>
      ))}
      <div className="cart-total">
        {cartItems.totalPrice.get !== 0
          ? `Total: €${cartItems.totalPrice.get}`
          : `Your shopping cart is empty`}
      </div>
      <div className="cart-total cart-total-icon">
        {cartItems.totalPrice.get === 0 ? (
          <AiOutlineShoppingCart />
        ) : (
          <>
            <div className="cart-total checkout">
              <NavLink to="/cart" className="special">
                Checkout
              </NavLink>
            </div>
            <div
              className="cart-total checkout checkout-top-margin"
              onClick={methods.clearCart}
            >
              <a href="#" className="special">
                clear cart
              </a>
            </div>
          </>
        )}
      </div>
    </RightNavContainer>
  );
}

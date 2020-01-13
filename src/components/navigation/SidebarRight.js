import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/context";
import { RightNavContainer } from "./SidebarRightStyles";
import { findProductById } from "../../utils/Utils";
import { NavLink } from "react-router-dom";
import { Image, ItemTitle, ItemCount } from "./SidebarRightStyles";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function SidebarRight() {
  const [, , menuToggles] = useContext(DataContext);
  const [qty, setQty] = useState(1);
  const url_image = "./resources/product-images/img/";

  useEffect(_ => total());

  const addQuantity = e => {
    const id = Number(e.target.dataset.id);
    const product = findProductById(menuToggles.cart.get, id);

    product.total = qty * product.fields.price;
    setQty((product.quantity = product.quantity + 1));
  };

  const minusQuantity = e => {
    const id = Number(e.target.dataset.id);
    const product = findProductById(menuToggles.cart.get, id);

    if (product.quantity === 0) {
      const newCart = menuToggles.cart.get.filter(item => item.quantity !== 0);
      menuToggles.cart.set(newCart);
      total();
    }

    if (product.quantity >= 1) {
      product.quantity = product.quantity - 1;
      product.total = qty * product.fields.price;
      setQty(product.quantity);
      total();
    }
    total();
  };

  const deleteItem = e => {
    const id = Number(e.target.dataset.id);
    const newCart = menuToggles.cart.get.filter(item => item.fields.id !== id);

    menuToggles.cart.set(newCart);
    total();
  };

  const clearCart = _ => {
    menuToggles.cart.set([]);
  };

  const total = _ => {
    const tt = menuToggles.cart.get
      .map(item => item.total)
      .reduce((a, b) => a + b, 0);

    menuToggles.totalPrice.set(tt);
  };

  total();

  return (
    <RightNavContainer>
      {menuToggles.cart.get.map((item, index) => (
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
        {menuToggles.totalPrice.get !== 0
          ? `Total: €${menuToggles.totalPrice.get}`
          : `Your shopping cart is empty`}
      </div>
      <div className="cart-total cart-total-icon">
        {menuToggles.totalPrice.get === 0 ? (
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
              onClick={clearCart}
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

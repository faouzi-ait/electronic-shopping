import React, { useEffect, useContext } from "react";
import { DataContext } from "../../context/context";
import { RightNavContainer } from "./SidebarRightStyles";
import { NavLink } from "react-router-dom";
import { Image, ItemTitle, ItemCount } from "./SidebarRightStyles";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function SidebarRight() {
  const [, , , methods, cartItems] = useContext(DataContext);
  const fromStorage = JSON.parse(localStorage.getItem("shoppingCart"));
  const url_image = "./resources/product-images/img/";

  useEffect(_ => methods.total());

  const addQuantity = e => {
    methods.addToQuantity(Number(e.target.dataset.id));
  };

  const minusQuantity = e => {
    methods.minusQuantity(Number(e.target.dataset.id));
  };

  const deleteItem = e => {
    methods.removeFromCart(Number(e.target.dataset.id));
  };

  return (
    <RightNavContainer>
      {fromStorage.map((item, index) => (
        <div key={index} className="cart-item-separation">
          <Image
            src={`${url_image}${item.fields.image.fields.file.url}`}
            alt="photo"
          />
          <NavLink to={`/product/${item.fields.id}`}>
            <ItemTitle>{item.fields.title}</ItemTitle>
          </NavLink>
          <ItemCount>
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
            <div>Quantity: {item.quantity} </div>
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

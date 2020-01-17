import React, { useEffect, useContext } from "react";
import { DataContext } from "../context/context";
import { NavLink } from "react-router-dom";
import {
  CartHero,
  AboutFilter
} from "../components/home_components/HeroComponentStyles";
export default function Shopping_Cart_Page() {
  const [, , , methods, cartItems] = useContext(DataContext);
  const bg_url =
    "url(../../resources/page-images/images/storeBcg.jpeg) center/cover no-repeat;";
  const url_image = "./resources/product-images/img/";
  const totalAftertax =
    methods.taxAmount(cartItems.totalPrice.get) + cartItems.totalPrice.get;
  useEffect(_ => methods.total());
  const removeItem = e => {
    const id = Number(e.target.dataset.id);
    methods.removeFromCart(id);
  };
  const addQuantity = e => {
    const id = Number(e.target.dataset.id);
    methods.addToQuantity(id);
  };
  const removeQuantity = e => {
    const id = Number(e.target.dataset.id);
    methods.minusQuantity(id);
  };
  console.log(cartItems.cart.get);
  return (
    <div className="shopping">
      {" "}
      <CartHero bg={bg_url}>
        {" "}
        <AboutFilter />{" "}
      </CartHero>{" "}
      <div className="filter-section">
        {" "}
        <p className="product-title">Cart Items</p>{" "}
        <div className="product-border"></div>{" "}
      </div>{" "}
      <div className="cart-items-section">
        {" "}
        <div className="cart-items">
          {" "}
          {cartItems.totalPrice.get ? (
            <div className="cart-items-headers cart-items-headers__format">
              {" "}
              <div>products</div> <div>item</div> <div>price</div>{" "}
              <div>quantity</div> <div>remove</div> <div>total</div>{" "}
            </div>
          ) : (
            ""
          )}{" "}
          <div className="cart-items-headers cart-items-list">
            {" "}
            {cartItems.cart.get.map((item, index) => (
              <>
                {" "}
                <div className="cart-page-item-list cart-item-image" key={index}>
                  {" "}
                  <img
                    src={`${url_image}${item.fields.image.fields.file.url}`}
                    alt={item.fields.company}
                    className="feature-img-cart-item"
                  />{" "}
                </div>{" "}
                <div className="cart-page-item-list cart-item-title">
                  {" "}
                  <NavLink to={`/product/${item.fields.id}`}>
                    {" "}
                    {item.fields.title.substring(0, 10)}...{" "}
                  </NavLink>{" "}
                </div>{" "}
                <div className="cart-page-item-list cart-item-price">${item.fields.price}</div>{" "}
                <div className="cart-page-item-list cart-item-quantity">
                  {" "}
                  <button
                    onClick={addQuantity}
                    data-id={item.fields.id}
                    className="cart-btn"
                  >
                 +
                  </button>
                  {item.quantity}
                  <button
                    onClick={removeQuantity}
                    data-id={item.fields.id}
                    className="cart-btn"
                  >
                    -
                  </button>{" "}
                </div>{" "}
                <div className="cart-page-item-list cart-item-remove">
                  {" "}
                  <i
                    className="fa fa-trash-o icon-format"
                    onClick={removeItem}
                    data-id={item.fields.id}
                  ></i>{" "}
                </div>{" "}
                <div className="cart-page-item-list cart-item-price-total">${item.total}</div>{" "}
              </>
            ))}{" "}
          </div>{" "}
          <div className="cart-total">
            {" "}
            {cartItems.totalPrice.get ? (
              <>
                {" "}
                <p>Subtotal : ${cartItems.totalPrice.get}</p>{" "}
                <p>Tax : ${methods.taxAmount(cartItems.totalPrice.get)}</p>{" "}
                <p>Total : ${totalAftertax}</p>{" "}
              </>
            ) : (
              "No items in your cart"
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

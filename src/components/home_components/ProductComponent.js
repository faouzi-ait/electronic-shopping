import React, { useState, useContext } from "react";
import { DataContext } from "../../context/context";
import { NavLink } from "react-router-dom";
import { findProductById } from "../../utils/Utils";
import { FaSearch } from "react-icons/fa";
import { ErrorAlert, ConfirmationAlert } from "../../utils/Utils";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductComponent({ featuredProducts }) {
  const [error, setError] = useState("");
  const [products, , menuToggles] = useContext(DataContext);
  const url_image = "./resources/product-images/img/";

  const removeErrorMsg = _ => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };
  const addToCart = event => {
    const id = Number(event.target.dataset.id);
    const selectedProduct = findProductById(products, id);
    const isProductAdded = findProductById(menuToggles.cart.get, id);

    if (isProductAdded !== undefined) {
      setError(`This product was already added`);
      removeErrorMsg();
      return;
    }

    if (selectedProduct) {
      const addedProduct = {
        ...selectedProduct,
        quantity: 1,
        total: selectedProduct.fields.price
      };
      const cart = [...menuToggles.cart.get, addedProduct];
      menuToggles.cart.set(cart);
    }
  };

  console.log(menuToggles.cart.get);

  return (
    <>
      <div className="added-product-in-component">{error && ErrorAlert(error)}</div>
      {featuredProducts.map((item, index) => (
        <>
          <div className="feature-section-box" key={index}>
            <div className="feature-img-container">
              <img
                src={`${url_image}${item.fields.image.fields.file.url}`}
                alt={item.fields.company}
                className="feature-img-item"
              />
            </div>
            <div className="feature-title">{item.fields.title}</div>
            <div className="feature-price">{item.fields.price}</div>
            <div className="feature-overlay">
              <div
                className="feature-details"
                onClick={addToCart}
                data-id={item.fields.id}
              >
                <AiOutlineShoppingCart
                  onClick={addToCart}
                  data-id={item.fields.id}
                  className="cart"
                />
              </div>
              <div className="feature-addtocart">
                <NavLink to={`/product/${item.fields.id}`}>
                  <FaSearch data-id={item.fields.id} />
                </NavLink>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default ProductComponent;

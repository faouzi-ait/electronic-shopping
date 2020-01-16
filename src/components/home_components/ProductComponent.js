import React, { useState, useContext } from "react";
import { DataContext } from "../../context/context";
import { NavLink } from "react-router-dom";
import { findProductById } from "../../utils/Utils";
import { ErrorAlert } from "../../utils/Utils";

function ProductComponent({ products }) {
  const [, , , methods, cartItems] = useContext(DataContext);
  const [error, setError] = useState("");
  const url_image = "./resources/product-images/img/";

  const removeErrorMsg = _ => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const addItem = e => {
    const id = Number(e.target.dataset.id);
    const isProductAdded = findProductById(cartItems.cart.get, id);

    if (isProductAdded !== undefined) {
      setError(`Product already added`);
      removeErrorMsg();
    } else {
      methods.addToCart(id);
    }
  };

  //console.log(cartItems.filteredList);
  //console.log(getProductsBrand(products));

  return (
    <>
      <div className="added-product-in-component">
        {error && ErrorAlert(error)}
      </div>
      {products.map((item, index) => (
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
              <div className="feature-addtocart">
                <i
                  onClick={addItem}
                  data-id={item.fields.id}
                  className="fa fa-cart-plus"
                ></i>
              </div>
              <div className="feature-addtocart">
                <NavLink to={`/product/${item.fields.id}`}>
                  <i className="fa fa-search"></i>
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

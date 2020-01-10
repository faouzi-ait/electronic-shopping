import React, { useContext } from "react";
import { DataContext } from "../../context/context";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

function ProductComponent({ featuredProducts }) {
  const [products, , menuToggles] = useContext(DataContext);
  const url_image = "./resources/product-images/img/";

  const findProductById = (array, id) => {
    return array.find(item => item.fields.id === id);
  };

  const addToCart = event => {
    const id = Number(event.target.dataset.id);
    const selectedProduct = findProductById(products, id);
    const isProductAdded = findProductById(menuToggles.cart.get, id);

    if (isProductAdded !== undefined) {
      alert(`This product was already added...`);
      return;
    }

    if (selectedProduct) {
      const cart = [...menuToggles.cart.get, selectedProduct];
      menuToggles.cart.set(cart);
    }
  };

  return (
    <>
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
                <FaShoppingCart
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

import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/context";
import { ErrorAlert } from "../utils/Utils";
import { findProductById } from "../utils/Utils";
import { NavLink } from "react-router-dom";
import {
  AboutHero,
  AboutFilter
} from "../components/home_components/HeroComponentStyles";

export default function Single_Product_Page() {
  const param = useParams();
  const [products, , menuToggles] = useContext(DataContext);
  const [error, setError] = useState("");

  const product = findProductById(products, Number(param.id));
  const url_image = "../resources/product-images/img/";
  const bg_url =
    "url(../../resources/page-images/images/singleProductBcg.jpeg) center/cover no-repeat;";

  const addToCart = event => {
    const id = Number(event.target.dataset.id);
    const selectedProduct = findProductById(products, id);
    const isProductAdded = findProductById(menuToggles.cart.get, id);

    if (isProductAdded !== undefined) {
      setError(`Product already added`);
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

  const removeErrorMsg = _ => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <div className="product">
      <AboutHero bg={bg_url}>
        <AboutFilter />
      </AboutHero>
      <div className="added-product-in-component">
        {error && ErrorAlert(error)}
      </div>
      <div className="single-page-container">
        <div className="left-single-section">
          <img
            src={`${url_image}${product.fields.image.fields.file.url}`}
            alt={product.fields.company}
            className="single-img-item"
          />
        </div>
        <div className="right-single-section">
          <div className="single-product-title">{product.fields.title}</div>
          <div>
            <span className="single-product-company-span">Company: </span>
            <div className="single-product-company">
              {product.fields.company}
            </div>
          </div>
          <div className="single-product-price">{product.fields.price}</div>
          <div className="single-product-description">
            {product.fields.description}
          </div>

          <div className="button-container">
            <div className="primary-button-container single-product-back">
              <a
                href={() => window.history.back()}
                onClick={() => window.history.back()}
                className="primary-button fullwidth"
              >
                go back
              </a>
            </div>

            <div className="primary-button-container single-product-add">
              <NavLink
                to={`/product/${product.fields.id}`}
                className="primary-button fullwidth"
                onClick={addToCart}
                data-id={product.fields.id}
              >
                add to cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import ProductComponent from "../components/home_components/ProductComponent";
import { DataContext } from "../context/context";

const Product_List_Page = _ => {
  const [products, ,] = useContext(DataContext);

  return (
    <>
      <header className="header-back"></header>
      <div className="filter-section">
        <p className="product-title">Our Products</p>
        <div className="product-border"></div>
      </div>
      <div className="product-section">
        <ProductComponent featuredProducts={products} />
      </div>
    </>
  );
};

export default Product_List_Page;

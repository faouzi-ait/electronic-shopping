import React, { useState, useEffect, useContext } from "react";
import ProductComponent from "../components/home_components/ProductComponent";
import { getProductsBrand } from "../utils/Utils";
import { DataContext } from "../context/context";

const Product_List_Page = _ => {
  const [products, , , , cartItems] = useContext(DataContext);
  const [searchCriterias, setSearchCriterias] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(_ => {
    cartItems.brands.set([...new Set(getProductsBrand(products))]);
  }, []);

  const handleCheckbox = e => {
    if (e.target.checked) {
      setSearchCriterias([...searchCriterias, e.target.dataset.name]);
    } else {
      const newSearchList = searchCriterias.filter(
        item => item !== e.target.dataset.name
      );
      setSearchCriterias(newSearchList);
    }
  };

  useEffect(
    _ => {
      filterList();
    },
    [searchCriterias, products]
  );

  const filterList = _ => {
    searchCriterias.length === 0
      ? setSearchResult(products)
      : setSearchResult(
          products.filter(item => searchCriterias.includes(item.fields.company))
        );
  };

  return (
    <>
      <header className="header-back"></header>
      <div className="filter-section">
        <p className="product-title">Our Products</p>
        <div className="product-border"></div>
      </div>
      <div className="filtered-list">
        {cartItems.brands.get.map((item, index) => (
          <div key={index} className="brand-label">
            <input
              id={item}
              type="checkbox"
              data-name={item}
              onChange={handleCheckbox}
            />
            <label htmlFor={item} className="filter-item-name">
              {item}
            </label>
          </div>
        ))}
      </div>
      <div className="product-section">
        <ProductComponent products={searchResult} />
      </div>
    </>
  );
};

export default Product_List_Page;

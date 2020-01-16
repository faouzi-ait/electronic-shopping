import React, { useState, useEffect, useContext } from "react";
import ProductComponent from "../components/home_components/ProductComponent";
import {
  getProductsBrand,
  getMaxPriceValue,
  getMinPriceValue
} from "../utils/Utils";
import { DataContext } from "../context/context";

const Product_List_Page = _ => {
  const [products, , , , cartItems] = useContext(DataContext);
  const [searchCriterias, setSearchCriterias] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [rangeValue, setRangeValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(_ => {
    cartItems.brands.set([...new Set(getProductsBrand(products))]);
    setMax(getMaxPriceValue(products));
    setMin(getMinPriceValue(products));
  }, []);

  const handleCheckbox = e => {
    if (e.target.checked) {
      setSearchCriterias([...searchCriterias, e.target.dataset.name]);
      filterList();
    } else {
      setSearchCriterias(
        searchCriterias.filter(item => item !== e.target.dataset.name)
      );
      filterList();
    }
  };

  const filterList = _ => {
    searchCriterias.length === 0
      ? setSearchResult(
          products.filter(item => item.fields.price >= rangeValue)
        )
      : setSearchResult(
          products.filter(
            item =>
              searchCriterias.includes(item.fields.company) &&
              item.fields.price < rangeValue
          )
        );
  };

  useEffect(
    _ => {
      filterList();
    },
    [searchCriterias, products]
  );

  const handleRange = e => {
    setRangeValue(parseInt(e.target.value));
    filterList();
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
        <div className="range-style">
          <label htmlFor="range" className="filter-item-name">
            €{rangeValue ? rangeValue : min}
          </label>
          <input
            type="range"
            min={min}
            max={max}
            step="5"
            defaultValue={min}
            onChange={handleRange}
            name="range"
          ></input>
        </div>
      </div>
      <div className="product-section">
        <ProductComponent products={searchResult} />
      </div>
    </>
  );
};

export default Product_List_Page;

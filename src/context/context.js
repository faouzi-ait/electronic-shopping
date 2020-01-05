import React, { useEffect, useState, createContext } from "react";
import ProductList from "../api/products_list";
export const DataContext = createContext();

export const DataProvider = props => {
  const [products, setProducts] = useState([]);
  const [sideLeft, setSideLeft] = useState(false);
  const [sideRight, setSideRight] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState(0);

  const menuToggles = {
    left: { get: sideLeft, set: setSideLeft },
    right: { get: sideRight, set: setSideRight },
    totalItems: { get: totalCartItems, set: setTotalCartItems }
  };

  useEffect(() => {
    getList();
  }, []);

  const getList = async _ => {
    const request = await ProductList("resources/data/productData.json");
    const response = request.data;

    setProducts(response);
  };

  return (
    <DataContext.Provider value={[products, setProducts, menuToggles]}>
      {props.children}
    </DataContext.Provider>
  );
};

import React, { useState, createContext } from "react";
import items from "./productData";

export const DataContext = createContext();

export const DataProvider = props => {
  const [products, setProducts] = useState(items);
  const [sideLeft, setSideLeft] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [sideRight, setSideRight] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(15);
  const [selectedItems, setSelectedItems] = useState([]);

  const menuToggles = {
    left: { get: sideLeft, set: setSideLeft },
    right: { get: sideRight, set: setSideRight },
    overlay: { get: openOverlay, set: setOpenOverlay },
    totalItems: { get: totalCartItems, set: setTotalCartItems },
    cart: { get: shoppingCart, set: setShoppingCart },
    totalPrice: { get: totalPrice, set: setTotalPrice },
    tax: { get: tax, set: setTax },
    selected: { get: selectedItems, set: setSelectedItems }
  };

  return (
    <DataContext.Provider value={[products, setProducts, menuToggles]}>
      {props.children}
    </DataContext.Provider>
  );
};

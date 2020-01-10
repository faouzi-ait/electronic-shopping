import React, { useState, createContext } from "react";
import items from "./productData";

export const DataContext = createContext();

export const DataProvider = props => {
  const [products, setProducts] = useState(items);
  const [sideLeft, setSideLeft] = useState(false);
  const [sideRight, setSideRight] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [isSelected, setIsSelected] = useState([]);

  const menuToggles = {
    left: { get: sideLeft, set: setSideLeft },
    right: { get: sideRight, set: setSideRight },
    totalItems: { get: totalCartItems, set: setTotalCartItems },
    cart: { get: shoppingCart, set: setShoppingCart },
    quantity: { get: itemQuantity, set: setItemQuantity },
    selected: { get: isSelected, set: setIsSelected }
  };

  return (
    <DataContext.Provider value={[products, setProducts, menuToggles]}>
      {props.children}
    </DataContext.Provider>
  );
};

import React, { useState, useEffect, createContext } from "react";
import { findProductById } from "../utils/Utils";
import items from "./productData";

export const DataContext = createContext();

export const DataProvider = props => {
  const [products, setProducts] = useState(items);
  const [sideLeft, setSideLeft] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [sideRight, setSideRight] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [qty, setQty] = useState(0);
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

  const methods = {
    addToCart: input => {
      const id = Number(input);
      const selectedProduct = findProductById(products, id);

      if (selectedProduct) {
        const addedProduct = {
          ...selectedProduct,
          quantity: 1,
          total: selectedProduct.fields.price
        };

        const cart = [...menuToggles.cart.get, addedProduct];
        menuToggles.cart.set(cart);
      }
    },
    total: _ => {
      const tt = menuToggles.cart.get
        .map(item => item.total)
        .reduce((a, b) => a + b, 0);

      menuToggles.totalPrice.set(tt);
    }
  };

  return (
    <DataContext.Provider value={[products, setProducts, menuToggles, methods]}>
      {props.children}
    </DataContext.Provider>
  );
};

import React, { useState, createContext } from "react";
import { findProductById } from "../utils/Utils";
import items from "./productData";

export const DataContext = createContext();

export const DataProvider = props => {
  const [products, setProducts] = useState(items);
  const [sideLeft, setSideLeft] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [sideRight, setSideRight] = useState(false);

  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem("shoppingCart")) ||
      localStorage.setItem("shoppingCart", JSON.stringify([]))
  );

  const [brands, setBrands] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(15);
  const [selectedItems, setSelectedItems] = useState([]);

  const menuToggles = {
    left: { get: sideLeft, set: setSideLeft },
    right: { get: sideRight, set: setSideRight },
    overlay: { get: openOverlay, set: setOpenOverlay }
  };

  const cartItems = {
    totalItems: { get: totalCartItems, set: setTotalCartItems },
    cart: { get: shoppingCart, set: setShoppingCart },
    brands: { get: brands, set: setBrands },
    filteredList: { get: filteredList, set: setFilteredList },
    totalPrice: { get: totalPrice, set: setTotalPrice },
    tax: { get: tax, set: setTax },
    selected: { get: selectedItems, set: setSelectedItems }
  };

  const methods = {
    addToCart: id => {
      const selectedProduct = findProductById(products, Number(id));

      if (selectedProduct) {
        const addedProduct = {
          ...selectedProduct,
          quantity: 1,
          total: selectedProduct.fields.price
        };

        const cart = [...cartItems.cart.get, addedProduct];
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
        cartItems.cart.set(cart);
      }
    },
    removeFromCart: id => {
      const newCart = cartItems.cart.get.filter(item => item.fields.id !== id);
      localStorage.setItem("shoppingCart", JSON.stringify(newCart));
      cartItems.cart.set(newCart);
    },
    addToQuantity: id => {
      const fromStorage = JSON.parse(localStorage.getItem("shoppingCart"));
      const product = findProductById(fromStorage, id);
      const index = fromStorage.indexOf(product);

      product.quantity = product.quantity + 1;
      product.total = product.quantity * product.fields.price;

      fromStorage.splice(index, 1, product);
      localStorage.setItem("shoppingCart", JSON.stringify(fromStorage));
      methods.total();
    },
    minusQuantity: id => {
      const fromStorage = JSON.parse(localStorage.getItem("shoppingCart"));
      const product = findProductById(fromStorage, id);
      const index = fromStorage.indexOf(product);

      if (product.quantity >= 1) {
        product.quantity = product.quantity - 1;
        product.total = product.quantity * product.fields.price;

        localStorage.setItem("shoppingCart", JSON.stringify(fromStorage));
        fromStorage.splice(index, 1, product);
        methods.total();
      }

      if (product.quantity === 0) {
        fromStorage.splice(index, 1);
        methods.removeFromCart(id);
      }
    },
    clearCart: _ => {
      localStorage.setItem("shoppingCart", JSON.stringify([]));
      cartItems.cart.set([]);
    },
    total: _ => {
      const fromStorage = JSON.parse(localStorage.getItem("shoppingCart"));
      const tt = fromStorage.map(item => item.total).reduce((a, b) => a + b, 0);
      cartItems.totalPrice.set(tt);
    },
    taxAmount: total => {
      return (total * tax) / 100;
    }
  };

  return (
    <DataContext.Provider
      value={[products, setProducts, menuToggles, methods, cartItems]}
    >
      {props.children}
    </DataContext.Provider>
  );
};

import React, { useState, createContext } from "react";
import { findProductById } from "../utils/Utils";
import items from "./productData";

export const DataContext = createContext();

export const DataProvider = props => {
  const [products, setProducts] = useState(items);
  const [sideLeft, setSideLeft] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [sideRight, setSideRight] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
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
        cartItems.cart.set(cart);
      }
    },

    removeFromCart: id => {
      const newCart = cartItems.cart.get.filter(item => item.fields.id !== id);
      cartItems.cart.set(newCart);
    },

    addToQuantity: id => {
      const product = findProductById(cartItems.cart.get, id);

      product.quantity = product.quantity + 1;
      product.total = product.quantity * product.fields.price;
      methods.total();
    },

    minusQuantity: id => {
      const product = findProductById(cartItems.cart.get, id);

      if (product.quantity === 0) {
        const newCart = cartItems.cart.get.filter(item => item.quantity !== 0);
        cartItems.cart.set(newCart);
      }

      if (product.quantity >= 1) {
        product.quantity = product.quantity - 1;
        product.total = product.quantity * product.fields.price;
        methods.total();
      }

      if (product.quantity === 0) {
        methods.removeFromCart(id);
      }
    },

    clearCart: _ => {
      cartItems.cart.set([]);
    },
    total: _ => {
      const tt = cartItems.cart.get
        .map(item => item.total)
        .reduce((a, b) => a + b, 0);
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

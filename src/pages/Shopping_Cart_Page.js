import React, { useContext } from "react";
import { DataContext } from "../context/context";

export default function Shopping_Cart_Page() {
  const [, , menuToggles] = useContext(DataContext);

  console.log(menuToggles.cart.get);
  console.log(menuToggles.totalPrice.get);
  return <div className="shopping">Shopping Cart Page: Coming Soon </div>;
}

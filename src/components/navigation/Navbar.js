import React, { useContext } from "react";
import { DataContext } from "../../context/context";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { Nav, TopTitle, IconMenu } from "./SideBarLeftStyles";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  const [, , menuToggles, , cartItems] = useContext(DataContext);

  const leftMenu = e => {
    menuToggles.left.set(value => (value = !value));
  };
  const rightMenu = e => {
    menuToggles.right.set(value => (value = !value));
  };

  return (
    <Nav>
      <IconMenu>
        <FaBars onClick={leftMenu} />
      </IconMenu>

      <TopTitle>Awesome Products</TopTitle>

      <IconMenu>
        {cartItems.cart.get.length === 0 ? (
          <div className="cart-total-icon-nav">
            <AiOutlineShoppingCart onClick={rightMenu} />
          </div>
        ) : (
          <>
            <FaShoppingCart onClick={rightMenu} />
            {cartItems.cart.get.length}
          </>
        )}
      </IconMenu>
    </Nav>
  );
}

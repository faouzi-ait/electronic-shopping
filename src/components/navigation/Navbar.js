import React, { useContext } from "react";
import { DataContext } from "../../context/context";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { Nav, TopTitle, IconMenu } from "./ComponentStyle";

export default function Navbar() {
  const [, , menuToggles] = useContext(DataContext);

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
        <FaShoppingCart onClick={rightMenu} />
      </IconMenu>
    </Nav>
  );
}

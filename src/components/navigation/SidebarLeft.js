import React from "react";
import { LeftNavContainer, LeftUL, LeftLI } from "./ComponentStyle";
import { NavLink } from "react-router-dom";

export default function SidebarLeft() {
  return (
    <LeftNavContainer>
      <LeftUL>
        <div className="navbar-list">
          <LeftLI>
            <NavLink exact to="/" activeClassName="chosen">
              Home
            </NavLink>
          </LeftLI>
          <LeftLI>
            <NavLink to="/about" activeClassName="chosen">
              About
            </NavLink>
          </LeftLI>
          <LeftLI>
            <NavLink to="/products" activeClassName="chosen">
              Products
            </NavLink>
          </LeftLI>
          <LeftLI>
            <NavLink to="/contact" activeClassName="chosen">
              Contact
            </NavLink>
          </LeftLI>
          <LeftLI>
            <NavLink to="/cart" activeClassName="chosen">
              Cart
            </NavLink>
          </LeftLI>
        </div>
      </LeftUL>
    </LeftNavContainer>
  );
}

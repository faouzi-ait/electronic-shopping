import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 15px 35px;
  border-bottom: 3px solid rgba(204, 204, 204, 0.274);
`;

export const LeftNavContainer = styled.div`
  position: fixed;
  top: 4.1rem;
  width: 30%;
  height: 100%;
  padding: 0 !important;
  background: #fff;
  border-right: 3px solid rgba(204, 204, 204, 0.274);

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const TopTitle = styled.p`
  letter-spacing: 3px;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0 !important;
`;

export const IconMenu = styled.i`
  cursor: pointer;
  font-size: 1.4rem;
`;

export const LeftUL = styled.ul`
  margin-top: 2rem;
  padding: 0 !important;
  list-style-type: none;
`;

export const LeftLI = styled.li`
  margin-bottom: 1rem;
  text-decoration: none;
  transition: var(--maintransition);
  padding-left: 2rem;

  &:hover {
    background: #5fb7ea;
  }

  &:hover a {
    color: var(--mainwhite) !important;
  }
`;

export const LeftMenuListItems = _ => {
  return (
    <LeftUL>
      <div className="navbar-list">
        <LeftLI>
          <NavLink exact to="/" className="chosen">
            Home
          </NavLink>
        </LeftLI>
        <LeftLI>
          <NavLink to="/about" className="chosen" activeClassName="active">
            About
          </NavLink>
        </LeftLI>
        <LeftLI>
          <NavLink to="/products" className="chosen">
            Products
          </NavLink>
        </LeftLI>
        <LeftLI>
          <NavLink to="/contact" className="chosen">
            Contact
          </NavLink>
        </LeftLI>
        <LeftLI>
          <NavLink to="/cart" className="chosen">
            Cart
          </NavLink>
        </LeftLI>
      </div>
    </LeftUL>
  );
};

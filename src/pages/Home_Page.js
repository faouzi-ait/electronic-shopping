import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Hero from "../components/home_components/Hero";
import { HomePageTitle } from "../components/home_components/HeroComponentStyles";
import { DataContext } from "../context/context";

export default function Home_Page() {
  const [list, , menuToggles] = useContext(DataContext);

  return (
    <div className="home">
      <Hero>
        <HomePageTitle>
          <p>wicked digital</p>
          <div className="linkcontainer">
            <NavLink to="/products" className="homeProductList">
              Products Page
            </NavLink>
          </div>
        </HomePageTitle>
      </Hero>
    </div>
  );
}

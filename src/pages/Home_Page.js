import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Hero from "../components/home_components/Hero";
import { HomePageTitle } from "../components/home_components/HeroComponentStyles";
import { DataContext } from "../context/context";

export default function Home_Page() {
  const [list, , menuToggles] = useContext(DataContext);
  const bg_url =
    "url(../../resources/page-images/images/mainBcg.jpeg) center/cover no-repeat;";

  return (
    <div className="home">
      <Hero bg={bg_url}>
        <HomePageTitle>
          <p>wicked digital</p>
          <div className="primary-button-container">
            <NavLink to="/products" className="primary-button">
              Products Page
            </NavLink>
          </div>
        </HomePageTitle>
      </Hero>
    </div>
  );
}

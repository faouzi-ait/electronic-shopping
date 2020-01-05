import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "../components/home_components/Hero";
import { HomePageTitle } from "../components/home_components/HeroComponentStyles";

export default function Default_Page() {
  const height = "100vh"
  const bg_url =
    "url(../../resources/page-images/images/defaultBcg.jpeg) center/cover no-repeat;";

  return (
    <div className="default">
      <Hero bg={bg_url} height={height}>
        <HomePageTitle>
          <p>404 error</p>
          <div className="primary-button-container">
            <NavLink to="/" className="primary-button">
              Back to Home
            </NavLink>
          </div>
        </HomePageTitle>
      </Hero>
    </div>
  );
}

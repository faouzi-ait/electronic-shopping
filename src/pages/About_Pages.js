import React from "react";
import { NavLink } from "react-router-dom";

import {
  AboutContainer,
  LeftImage
} from "../components/about_components/About_Styles";

import {
  AboutHero,
  AboutFilter
} from "../components/home_components/HeroComponentStyles";

export default function About_Pages() {
  const bg_url =
    "url(../../resources/page-images/images/aboutBcg.jpeg) center/cover no-repeat;";

  return (
    <div className="about">
      <AboutHero bg={bg_url}>
        <AboutFilter />
      </AboutHero>
      <AboutContainer>
        <div className="about-left">
          <LeftImage bg={bg_url} />
        </div>
        <div className="about-right">
          <p className="about-title">The Store</p>
          <div className="underline"></div>
          <div className="about-text">
            <p>
              Lorem ipsum ed cautela nimia in peiores haeserat plagas, ut
              narrabimus postea, aemulis consarcinantibus insidias graves apud
            </p>
            <p>
              Lorem ipsum ed cautela nimia in peiores haeserat plagas, ut
              narrabimus postea, aemulis consarcinantibus insidias graves apud
            </p>
          </div>
          <div className="about-button">
            <div className="primary-button-container">
              <NavLink to="/products" className="primary-button more-info">
                More Info
              </NavLink>
            </div>
          </div>
        </div>
      </AboutContainer>
    </div>
  );
}

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Hero from "../components/home_components/Hero";
import { HomePageTitle } from "../components/home_components/HeroComponentStyles";
import ProductComponent from "../components/home_components/ProductComponent";
import { DataContext } from "../context/context";
import TitleComponent from "../components/about_components/AboutComponents";
import ServiceComponent from "../components/home_components/ServiceComponent";
import { getFeaturedProducts } from "../utils/Utils";
import classnames from "classnames";

export default function Home_Page() {
  const [products, ,] = useContext(DataContext);
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

      {/* SERVICES SECTION */}
      <div className="service-main-container">
        <div className="service-title-align">
          <TitleComponent title="Services" />
          <div className="underline"></div>
        </div>
        <div className="services-section">
          <ServiceComponent styleProp={classnames("service-section-box")} />
        </div>
      </div>

      {/* FEATURED SECTION */}
      <div className="feature-main-container">
        <div className="service-title-align">
          <TitleComponent title="Top Products" />
          <div className="underline"></div>
        </div>
        <div className="feature-section">
          <ProductComponent featuredProducts={getFeaturedProducts(products)} />
        </div>
      </div>
    </div>
  );
}

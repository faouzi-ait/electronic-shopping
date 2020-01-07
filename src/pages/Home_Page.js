import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Hero from "../components/home_components/Hero";
import { HomePageTitle } from "../components/home_components/HeroComponentStyles";
import { DataContext } from "../context/context";
import ServiceComponent from "../components/home_components/ServiceComponent";
import classnames from "classnames";

export default function Home_Page() {
  const [products, ,] = useContext(DataContext);
  const bg_url =
    "url(../../resources/page-images/images/mainBcg.jpeg) center/cover no-repeat;";

  const getFeaturedProducts = array => {
    return array.filter(item => item.fields.featured);
  };

  console.log(products.items);

  products.items.map(item => console.log(item));

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
        <div className="services-section">
          <ServiceComponent styleProp={classnames("service-section-box")} />
        </div>
      </div>

      {/* FEATURED SECTION */}
    </div>
  );
}

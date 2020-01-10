import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About_Pages";
import Contact from "./pages/Contact_Page";
import Default from "./pages/Default_Page";
import Home from "./pages/Home_Page";
import ProductList from "./pages/Product_List_Page";
import SingleProductListPage from "./pages/Single_Product_Page";
import ShoppingCart from "./pages/Shopping_Cart_Page";
import { DataContext } from "./context/context";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navigation/Navbar";
import SideLeft from "./components/navigation/SidebarLeft";
import SideRight from "./components/navigation/SidebarRight";
import Footer from "./components/footer_components/Footer";

const App = _ => {
  const [, , menuToggle] = useContext(DataContext);

  return (
    <>
      <Navbar />
      {menuToggle.left.get && <SideLeft />}
      {menuToggle.right.get && <SideRight />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/product/:id" component={SingleProductListPage} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import './HomeScreen.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Products from '../Components/Products';
import Section from '../Components/Section';
import ProductsHeader from "../Components/ProductsHeader";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Section />
      <ProductsHeader />
      <Products category={"Chocolate"} />
      <Products category={"Vanilla"} />
      <Products category={"Pista"} />
      <Footer />
    </>
  );
};

export default HomeScreen;

import React from "react";
import "./Home.css";
import Cards from "../cards/Cards";
import Section3 from "../section3/Section3";
import Section4 from "../section4/Section4";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section2 from "../section2/Section2";
import Hero from "../Hero/Hero";




function Home() {

  return (
    <div className="main-home-container">
      <Header />
      <Hero />
      <Cards />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Home;

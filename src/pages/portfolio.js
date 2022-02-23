import * as React from "react";
import Nav from "../components/Nav";
import "../styles.css";
import portrait from "../media/elanor-portrait.jpg";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import styled from "styled-components";

const PortfolioPage = () => {
  return (
    <main className="page">
      <Nav />

      <Carousel></Carousel>

      <Footer />
    </main>
  );
};

export default PortfolioPage;

import * as React from "react";
import Nav from "../components/Nav";
import "../styles.css";
import portrait from "../media/elanor-portrait.jpg";
import Footer from "../components/Footer";
import styled from "styled-components";

const SAbout = styled.div`
  color: black;
  padding-top: 2rem;
  padding-bottom: 10rem;
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: left;
  display: grid;
  margin: 0 auto;
  img {
    display: inline;
    margin: 0 auto;
    width: auto;
    border-radius: 50%;
  }

@media screen and (max-width: 768px) {
 
    padding: 2rem;
`;

const AboutPage = () => {
  return (
    <main className="page">
      <Nav />

      <SAbout>
        <img src={portrait} alt="Elanor portrait" height="300px" />

        <h2>Congratulations on your pregnancy!</h2>
        <p>
          My name is Elanor Gabriela and I am a birth doula. I have recently
          completed formal doula training through DONA International, and am now
          on my way to being a certified. It would be an honor to be given the
          chance to be your doula. As your doula, my goal is to make sure you as
          my client are informed, supported, empowered, and prepared as you
          welcome your new bundle of joy.
        </p>
        <p>
          Currently, I live in Hoboken, NJ with my wife and our two cats:
          Penelope and Alice. When I’m not helping clients bring life into the
          world, I am nannying, painting, or taking photographs.
        </p>
        <p>
          Prior to birthwork, I nannied for ten years. As much as I love raising
          children, I have chosen to branch out and shift my focus onto birthing
          people and their families
        </p>
      </SAbout>

      <Footer />
    </main>
  );
};

export default AboutPage;

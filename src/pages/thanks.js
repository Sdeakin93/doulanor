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

const ThanksPage = () => {
  return (
    <main className="page">
      <Nav />

      <SAbout>
        <img src={portrait} alt="Elanor portrait" height="300px" />

        <h2>Thanks for stopping by!</h2>
        <p>I'll be in touch soon!</p>
      </SAbout>

      <Footer />
    </main>
  );
};

export default ThanksPage;

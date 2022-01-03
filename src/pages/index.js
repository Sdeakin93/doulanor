import * as React from "react";
import Nav from "../components/Nav";
import Block from "../components/Block";
import Footer from "../components/Footer";
import "../styles.css";
import header from "../media/header.jpg";
const IndexPage = () => {
  return (
    <main className="index-page">
      <Nav />

      <Block
        paddingTop
        centreText
        image={header}
        title="
        Inclusive, LGBTQ+ friendly, doula services."
        subtitle=" Based out of Hoboken, NJ."
        text=" I believe that every pregnant person deserves unconditional,
        nonjudgmental, and unbiased support before, during, and after labor. I
        will hold space for you to be and feel at your utmost authentic self,
        free to say and do anything and everything during your delivery."
        buttonText="Let's work together"
        buttonLink="/contact"
        dark
      />
      <Footer />
    </main>
  );
};

export default IndexPage;

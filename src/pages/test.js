import * as React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";
import Block from "../components/Block";
import Divider from "../components/Divider";
import babySmile from "../media/baby-smile.jpg";
import babyFoot from "../media/baby-foot.jpg";
const IndexPage = () => {
  return (
    <main className="index-page">
      <Nav />
      <Block
        paddingTop
        imageRight
        image={babySmile}
        subtitle="this is a subtitle"
        title="this is a title"
        text="this is a test of the image block component"
      />
      <Block
        darkBackground
        image={babyFoot}
        subtitle="this is a subtitle"
        title="this is a title"
        text="this is a test of the image block component"
      />
      <Block
        subtitle="this is a subtitle"
        title="this is a title"
        text="this is a test of the image block component"
      />
      <Divider />
      <Footer />
    </main>
  );
};

export default IndexPage;

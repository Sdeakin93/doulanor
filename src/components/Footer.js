import * as React from "react";
import "../styles.css";
import Socials from "../components/Socials";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <Socials />
      </div>
      <div className="acknowledgement">
        <h4>
          {" "}
          <i>
            Doulanor is queer, woman, and Hispanic owned. I am happy to work on
            a sliding scale for those who are BIPOC, LGBTQIA+, single parents,
            teenage parents, unemployed, sex workers, disabled.{" "}
          </i>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;

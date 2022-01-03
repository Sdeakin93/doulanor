import * as React from "react";
import Button from "./Button";
import "../styles.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="section">
          <div className="section-text">
            <h3>
              Inclusive, LGBTQ+ friendly, doula services. Based out of Hoboken,
              NJ.
            </h3>
            <p>
              I believe that every pregnant person deserves unconditional,
              nonjudgmental, and unbiased support before, during, and after
              labor. I will hold space for you to be and feel at your utmost
              authentic self, free to say and do anything and everything during
              your delivery.
            </p>
            <br />
            <Button text="Let's work together" link="/contact"></Button>
          </div>
        </div>
      </div>

      <div class="full-size-img"></div>
    </header>
  );
};

export default Header;

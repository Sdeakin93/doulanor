import * as React from "react";
import "../styles.css";

import ig from "../media/instagram.png";
import doulamatch from "../media/doulamatch.png";

const Socials = () => {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com/doulanor/">
        <img src={ig} alt="instagram logo" height="50px"></img>
      </a>
      <a href="https://doulamatch.net/profile/31717/elanor-jarque">
        <img src={doulamatch} alt="instagram logo" height="50px"></img>
      </a>
    </div>
  );
};

export default Socials;

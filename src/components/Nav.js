import * as React from "react";
import { Link } from "gatsby";
import "../styles.css";
import logo from "../media/logo.png";

// markup
const Nav = () => {
  return (
    <div className="whole-container">
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="doulanor logo" height="150px"></img>
        </Link>
        <div className="linkStyles">
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>

          {/* <Link className="links" to="/portfolio">
            Portfolio
          </Link> */}
          <Link className="links" to="/services">
            Services
          </Link>
        </div>
      </div>
      <></>
    </div>
  );
};

export default Nav;

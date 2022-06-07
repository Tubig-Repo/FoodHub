import React from "react";
import NavCSS from "./Nav.module.css";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className={NavCSS.nav}>
      <div className={NavCSS.nav_container}>
        <div className={NavCSS.nav_logoContainer}>
          <Link to="/">
            <img src={Logo} alt={"Food Hub Logo"}></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import NavCSS from "./Nav.module.css";
import Logo from "../img/Logo.png";
const Nav = () => {
  return (
    <div className={NavCSS.nav}>
      <div className={NavCSS.nav_container}>
        <div className={NavCSS.nav_logoContainer}>
          <img src={Logo} alt={"Food Hub Logo"}></img>
        </div>
        {/* <ul className={NavCSS.nav_links}>
          <li>
            <a>link1</a>
          </li>
          <li>
            <a>link2</a>
          </li>
          <li>
            <a>link3</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Nav;

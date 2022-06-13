import React from "react";
import NavCSS from "./Nav.module.css";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const location = useLocation();
  return (
    <div
      className={`${NavCSS.nav} ${
        location.pathname.includes("/searched/") ? NavCSS.nav_recipe : undefined
      }`}
    >
      <div className={NavCSS.nav_container}>
        <div className={NavCSS.nav_logoContainer}>
          <Link to="/">
            <img src={Logo} alt={"Food Hub Logo"}></img>
          </Link>
        </div>

        <ul
          className={
            location.pathname.includes("/searched/")
              ? NavCSS.nav_linkRecipe
              : undefined
          }
        >
          <li>Home</li>
          <li>All Recipes</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

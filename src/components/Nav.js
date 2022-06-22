import React from "react";
import NavCSS from "./Nav.module.css";
import Logo from "../img/Logo.png";
import { Link, NavLink } from "react-router-dom";
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
            location.pathname.includes("/searched/") ||
            location.pathname.includes("/recipe/")
              ? NavCSS.nav_linkRecipe
              : undefined
          }
        >
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/allrecipe">
            <li>All Recipes</li>
          </NavLink>
          <NavLink to="/breakfast">
            <li>Breakfast</li>
          </NavLink>
          <NavLink to="/lunch">
            <li>Lunch</li>
          </NavLink>
          <NavLink to="/dinner">
            <li>Dinner</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

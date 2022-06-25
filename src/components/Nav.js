import { React, useEffect, useState } from "react";
import NavCSS from "./Nav.module.css";
import Logo from "../img/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Nav = () => {
  const location = useLocation();
  const [navExpand, isNavExpand] = useState(false);
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
        <button
          className={NavCSS.btn_burger}
          onClick={() => {
            isNavExpand(!navExpand);
          }}
        >
          <HiOutlineMenuAlt3 />
        </button>

        <ul
          className={`${
            location.pathname.includes("/searched/") ||
            location.pathname.includes("/recipe/") ||
            location.pathname.includes("/navigate/") ||
            location.pathname.includes("/category/")
              ? NavCSS.nav_linkRecipe
              : NavCSS.nav_links
          } ${navExpand ? NavCSS.nav_mobile : NavCSS.nav_links}`}
        >
          <li>
            <NavLink to="/">Home </NavLink>
          </li>

          <li>
            <NavLink to="/navigate/allrecipes">All Recipes </NavLink>
          </li>

          <li>
            <NavLink to="/navigate/breakfast">Breakfast </NavLink>
          </li>

          <li>
            <NavLink to="/navigate/lunch">Lunch </NavLink>
          </li>

          <li>
            <NavLink to="/navigate/dinner">Dinner </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

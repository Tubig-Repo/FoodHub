import React, { useState } from "react";
import SearchCSS from "./Search.module.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
const Search = () => {
  const [inputValue, setInputvalue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const submitHandler = function (e) {
    e.preventDefault();
    navigate("/searched/" + inputValue);
  };

  return (
    <div className={SearchCSS.filter_container}>
      <p
        className={`${SearchCSS.search_text}`}
        style={
          location.pathname.includes("/searched/") ||
          location.pathname.includes("/navigate/") ||
          location.pathname.includes("/category/")
            ? { color: "black" }
            : { color: "#cacaca" }
        }
      >
        Find A Recipe
      </p>
      <form onSubmit={submitHandler} className={SearchCSS.search_bar}>
        <input
          type="text"
          id={SearchCSS.recipe_search}
          name="recipe-search"
          value={inputValue}
          onChange={(e) => setInputvalue(e.target.value)}
          placeholder="Search for a recipe..."
        />
        <button className={SearchCSS.search_icon}>
          <BsSearch className={SearchCSS.icon} />
        </button>
      </form>
    </div>
  );
};

export default Search;

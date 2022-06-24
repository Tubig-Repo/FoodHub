import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import RecipecategoryCSS from "./RecipeCategory.module.css";

const RecipeCategory = ({ id, categoryName, img }) => {
  return (
    <li key={id} className={RecipecategoryCSS.categoryElement_container}>
      <div
        className={RecipecategoryCSS.category_img}
        key={id}
        style={{ background: `url(${img})` }}
      ></div>
      <Link
        to={`/category/${categoryName}`}
        className={RecipecategoryCSS.link_style}
      >
        {categoryName}
      </Link>
    </li>
  );
};

export default RecipeCategory;

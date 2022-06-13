import React from "react";
import RecipecategoryCSS from "./RecipeCategory.module.css";

const RecipeCategory = ({ categoryName, imgPath }) => {
  return (
    <li className={RecipecategoryCSS.categoryElement_container}>
      <div
        className={RecipecategoryCSS.category_img}
        // style={{ background: `url(${imgPath})` }}
      ></div>
      <p>{categoryName}</p>
    </li>
  );
};

export default RecipeCategory;

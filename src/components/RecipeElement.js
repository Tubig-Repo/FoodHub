import React from "react";
import currentRecipe from "./RecipeElement.module.css";
const RecipeElement = ({ recipeName, id, imgPath }) => {
  return (
    <li
      key={Number(id)}
      className={currentRecipe.element_container}
      style={{ backgroundImage: `url('${imgPath}')` }}
    >
      <div className={currentRecipe.recipe_name}>{recipeName}</div>
    </li>
  );
};

export default RecipeElement;

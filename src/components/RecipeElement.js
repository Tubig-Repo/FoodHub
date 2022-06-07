import React from "react";
import currentRecipe from "./RecipeElement.module.css";
const RecipeElement = ({ recipeName, id, imgPath, recipeDesc }) => {
  return (
    <li key={Number(id)} className={currentRecipe.element_container}>
      <div className={currentRecipe.recipe__flexContainer}>
        <div
          className={currentRecipe.recipe__imageContainer}
          style={{
            backgroundImage: `url('${imgPath}') `,
          }}
        ></div>
        <div className={currentRecipe.recipe_name}>{recipeName}</div>
        <p className={currentRecipe.recipe__description}>{recipeDesc}</p>
      </div>
    </li>
  );
};

export default RecipeElement;

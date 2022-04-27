import React from "react";
import RecipeCSS from "./Recipes.module.css";
import RecipeElement from "./Recipe_Components/RecipeElement";

const Recipes = ({ recipeData }) => {
  return (
    <div className={RecipeCSS.main}>
      <div className={RecipeCSS.recipe_container}>
        <ul>
          {recipeData.map((el) => (
            <RecipeElement recipeName={el.FoodName} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;

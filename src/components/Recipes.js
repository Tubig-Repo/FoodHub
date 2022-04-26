import React from "react";
import RecipeCSS from "./Recipes.module.css";
import RecipeElement from "./Recipe_Components/RecipeElement";

const Recipes = ({ recipeData }) => {
  return (
    <div className={RecipeCSS.main}>
      <div className={RecipeCSS.recipe_container}>
        <ul>
          {/* <RecipeElement recipeName="Recipe 1" />
          <RecipeElement recipeName="Recipe 1" />
          <RecipeElement recipeName="Recipe 1" />
          <RecipeElement recipeName="Recipe 1" />
          <RecipeElement recipeName="Recipe 1" />
          <RecipeElement recipeName="Recipe 1" />
          <RecipeElement recipeName="Recipe 1" />
          <RecipeElement recipeName="Recipe 1" />
          <RecipeElement recipeName="Recipe 1" /> */}
          {recipeData.map((el) => (
            <RecipeElement recipeName={el.foodName} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;

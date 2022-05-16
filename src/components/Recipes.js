import React from "react";
import RecipeCSS from "./Recipes.module.css";
import RecipeElement from "./Recipe_Components/RecipeElement";
const Recipes = ({ query }) => {
  return (
    <div className={RecipeCSS.main}>
      <div className={RecipeCSS.recipe_container}>
        <ul>
          {query.map((el) => (
            <RecipeElement recipeName={el.FoodName} key={el.FoodID} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;

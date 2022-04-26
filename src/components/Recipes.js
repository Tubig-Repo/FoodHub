import React from "react";
import RecipeCSS from "./Recipes.module.css";
import RecipeElement from "./Recipe_Components/RecipeElement";
import { useState } from "react";

const Recipes = () => {
  const [recipeData, setRecipe] = useState([
    {
      foodId: 1,
      foodName: "Adobong Manok",
      location: "Batangas",
      ingredients:
        "1 Whole Chicken+1 Slice Onion+1 Head Garlic+2 bay leaves+1/4 Cup Soy Sauce+1/2 teaspoon perppercorns+1/4 cup Canola oil+2 large sliced potatoes+1/2 Cup vinegar +1 cup water+salt and pepper",
    },

    {
      foodId: 2,
      foodName: "Sinigang na baboy",
      location: "Ilocos",
    },

    {
      foodId: 3,
      foodName: "Bibingka",
      location: "Ilocos",
    },
  ]);
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


///test
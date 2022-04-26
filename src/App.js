import { useState } from "react";
import Header from "./components/Header";
import Recipe from "./components/Recipes";
function App() {
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
    <div className="container">
      <Header />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default App;
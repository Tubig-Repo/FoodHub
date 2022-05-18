import React, { useEffect, useState } from "react";
import RecipeCSS from "./Recipes.module.css";
import RecipeElement from "../components/RecipeElement";
import { useParams } from "react-router-dom";
import axios from "axios";
const Recipes = () => {
  let params = useParams();
  const [searchedData, setSearchedData] = useState([]);

  async function getData() {
    axios
      .get("https://foodhub-bscs.000webhostapp.com/index.php")
      .then((res) => {
        setSearchedData(
          res.data.filter((el) =>
            el.FoodName.toLowerCase().includes(params.search)
          )
        );
      });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search]);
  return (
    <div className={RecipeCSS.main}>
      <div className={RecipeCSS.recipe_container}>
        <ul>
          {searchedData.map((el) => (
            <RecipeElement recipeName={el.FoodName} key={el.FoodID} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;

import React, { useEffect, useState } from "react";
import RecipeCSS from "./Recipes.module.css";
import RecipeElement from "../components/RecipeElement";
import { useParams, useLocation } from "react-router-dom";
import Search from "./Search";
import MoonLoader from "react-spinners/ClipLoader";
const Recipes = ({ data, loading, error }) => {
  let params = useParams();
  let location = useLocation();
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    console.log(params);
    if (data && params.search) {
      setSearchedData(
        data.filter((el) => el.FoodName.toLowerCase().includes(params.search))
      );
    } else if (data && location.pathname.includes("/navigate/allrecipes")) {
      setSearchedData(data);
    } else if (data && location.pathname.includes("/navigate/breakfast")) {
      //breakfast recipes
    } else if (data && location.pathname.includes("/navigate/lunch")) {
      //lunch recipes
    } else if (data && location.pathname.includes("/navigatge/dinner")) {
      //dinner Reciper
    } else if (data && params.categoryName) {
      setSearchedData(
        data.filter((el) =>
          el.category.toLowerCase().includes(params.categoryName.toLowerCase())
        )
      );
    }
  }, [data, location.pathname, params.search]);
  const override = {
    display: "block",
    margin: "0 auto",
  };

  if (loading) {
    return (
      <div className={RecipeCSS.loader_container}>
        <MoonLoader
          color={"#FF9400"}
          loading={loading}
          size={50}
          css={override}
        />
      </div>
    );
  }

  return (
    <div className={RecipeCSS.main}>
      <Search />
      {
        <div className={RecipeCSS.recipe_container}>
          <ul className={RecipeCSS.recipe_list}>
            {searchedData.map((el) => (
              <RecipeElement
                recipeName={el.FoodName}
                id={el.FoodID}
                imgPath={el.imgPath}
                recipeDesc={el.Description}
              />
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default Recipes;

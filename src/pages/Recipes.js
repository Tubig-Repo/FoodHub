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
    if (data) {
      if (params.search) {
        setSearchedData(
          data.filter((el) => el.FoodName.toLowerCase().includes(params.search))
        );
      } else if (location.pathname.includes("/navigate/allrecipes")) {
        setSearchedData(data);
      } else if (
        location.pathname.includes("/navigate/breakfast") ||
        location.pathname.includes("/navigate/lunch") ||
        location.pathname.includes("/navigate/dinner")
      ) {
        const paths = location.pathname.split("/");
        // data.map((el) => {
        //   return (el["meal"] = el["meal"].split(","));
        // });

        const capitalize = (s) => {
          if (typeof s !== "string") return "";
          return s.charAt(0).toUpperCase() + s.slice(1);
        };

        // breakfast Recipes
        setSearchedData(
          data.filter((el) => el.meal.includes(capitalize(paths[2])))
        );
      } else if (params.categoryName) {
        setSearchedData(
          data.filter((el) =>
            el.category
              .toLowerCase()
              .includes(params.categoryName.toLowerCase())
          )
        );
      }
    }
  }, [data, location.pathname, params.search, params.categoryName]);
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

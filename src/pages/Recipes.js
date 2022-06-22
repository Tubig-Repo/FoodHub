import React, { useEffect, useState } from "react";
import RecipeCSS from "./Recipes.module.css";
import RecipeElement from "../components/RecipeElement";
import { useParams } from "react-router-dom";
import Search from "./Search";
import MoonLoader from "react-spinners/ClipLoader";
const Recipes = ({data , loading , error}) => {
  let params = useParams();
  const [searchedData, setSearchedData] = useState([]);


  useEffect(()=>{
    if(data) {
      setSearchedData(data.filter((el) => el.FoodName.toLowerCase().includes(params.search)));
    }

  }, [data]);
  const override = {
    display: "block",
    margin: "0 auto",
  };

  if(loading) {
    return (
    <div className={RecipeCSS.loader_container}>
    <MoonLoader
      color={"#FF9400"}
      loading={loading}
      size={50}
      css={override}
    />
  </div>);
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

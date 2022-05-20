import React, { useEffect, useState } from "react";
import RecipeCSS from "./Recipes.module.css";
import RecipeElement from "../components/RecipeElement";
import { useParams } from "react-router-dom";
import axios from "axios";
import Search from "./Search";
import MoonLoader from "react-spinners/ClipLoader";
const Recipes = () => {
  let params = useParams();
  const [searchedData, setSearchedData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    axios
      .get("https://foodhub-bscs.000webhostapp.com/index.php")
      .then((res) => {
        setSearchedData(
          res.data.filter((el) =>
            el.FoodName.toLowerCase().includes(params.search)
          )
        );
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);
    getData();
    console.log(searchedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search]);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <div className={RecipeCSS.main}>
      <Search />

      {loading ? (
        <div className={RecipeCSS.loader_container}>
          <MoonLoader
            color={"#FF9400"}
            loading={loading}
            size={100}
            css={override}
          />
        </div>
      ) : (
        <div className={RecipeCSS.recipe_container}>
          <ul className={RecipeCSS.recipe_list}>
            {searchedData.map((el) => (
              <RecipeElement
                recipeName={el.FoodName}
                key={el.FoodID}
                imgPath={el.imgPath}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Recipes;

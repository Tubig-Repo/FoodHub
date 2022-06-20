import RecipePageCSS from "./RecipePage.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MoonLoader from "react-spinners/ClipLoader";
const RecipePage = () => {
  const [searchedData, setSearchedData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  let params = useParams();
  useEffect(() => {
    setLoading(true);
    getData();
  }, [params.recipeID]);

  async function getData() {
    axios
      .get("https://foodhub-bscs.000webhostapp.com/index.php")
      .then((res) => {
        setSearchedData(
          res.data.filter((el) => Number(el.FoodID) === Number(params.recipeID))
        );
        setLoading(false);
      })
      .catch((error) => setError(error));
  }

  const override = {
    display: "block",
    margin: "0 auto",
  };

  const splitString = function (ing) {
    return ing.split("+");
  };
  if (searchedData === undefined) {
    return (
      <div className={RecipePageCSS.loader_container}>
        <MoonLoader
          color={"#FF9400"}
          loading={loading}
          size={50}
          css={override}
        />
      </div>
    );
  }

  if (error) console.log(error);
  return (
    <div className={RecipePageCSS.recipePage_wrapper}>
      <section className={RecipePageCSS.recipe_heading}>
        {/* Recipe Image */}
        <div className={RecipePageCSS.recipeImage_container}>
          <img
            className={RecipePageCSS.recipeImg}
            src={searchedData[0].imgPath}
            alt={"something shit"}
          ></img>
        </div>
        {/* Recipe Description */}
        <div className={RecipePageCSS.recipe_desc1}>
          <h2>{searchedData[0].FoodName}</h2>
          <p>{searchedData[0].Description}</p>
          <div className={RecipePageCSS.recipe_desc2}>
            <ul>
              <li>
                Prep Time <br />
                <span className={RecipePageCSS.desc2}>
                  {searchedData[0].PrepTime}
                </span>
              </li>
              <li>
                Servings <br />
                <span className={RecipePageCSS.desc2}>
                  {searchedData[0].Serving}
                </span>
              </li>
              <li>
                Cooking Time <br />
                <span className={RecipePageCSS.desc2}>
                  {searchedData[0].CookingTime}
                </span>
              </li>
              <li>
                Category <br />
                <span className={RecipePageCSS.desc2}>
                  {searchedData[0].category}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Recipe Ingredients and Instructions */}
      <section className={RecipePageCSS.recipe_direction}>
        {/* Ingredients */}
        <div className={RecipePageCSS.ingredients}>
          <h3 className={RecipePageCSS.page_heading}>Ingredients</h3>
          <ul className={RecipePageCSS.ingredient_list}>
            {splitString(searchedData[0].Ingredients).map((el, index) => {
              return (
                <li className={RecipePageCSS.direction_el} key={index}>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Instructions */}
        <div className={RecipePageCSS.Instruction}>
          <h3 className={RecipePageCSS.page_heading}>Instructions</h3>
          <ul className={RecipePageCSS.instruction_list}>
            {splitString(searchedData[0].Instruction).map((el, index) => {
              return (
                <li className={RecipePageCSS.direction_el} key={index}>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RecipePage;

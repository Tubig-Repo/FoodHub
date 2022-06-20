import { React, useEffect, useState } from "react";
import MainCSS from "./Main.module.css";
import axios from "axios";
import RecipeElement from "../components/RecipeElement";
import RecipeCategory from "../components/RecipeCategory";
import { Link } from "react-router-dom";
const Main = () => {
  const [searchedData, setSearchedData] = useState([]);
  async function getData() {
    axios
      .get("https://foodhub-bscs.000webhostapp.com/index.php")
      .then((res) => {
        const latestRecipe = res.data.length - 4;
        setSearchedData(
          res.data.filter(
            (el) => el.FoodID >= latestRecipe && el.FoodID < res.data.length
          )
        );
      });
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const suggestedRecipes = [];
  const categoryMockData = [
    {
      categoryName: "Pork Adobo",
      imgPath: "../img/mock_img.jpg",
      id: 0,
    },
    {
      categoryName: "Pork Adobo",
      imgPath: "../img/mock_img.jpg",
      id: 1,
    },
    {
      categoryName: "Pork Adobo",
      imgPath: "../img/mock_img.jpg",
      id: 2,
    },
    {
      categoryName: "Pork Adobo",
      imgPath: "../img/mock_img.jpg",
      id: 3,
    },
    {
      categoryName: "Pork Adobo",
      imgPath: "../img/mock_img.jpg",
      id: 4,
    },
    {
      categoryName: "Pork Adobo",
      imgPath: "../img/mock_img.jpg",
      id: 5,
    },
  ];
  return (
    <div className={MainCSS.main_wrapper}>
      <section className={MainCSS.latestRecipe_section}>
        <div className={MainCSS.recipe_container}>
          <h1>
            Latest <span className={MainCSS.brand_heading}>Recipe</span>
          </h1>
          <ul className={MainCSS.latestRecipe_list}>
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
      </section>

      <section className={MainCSS.latestCollection_section}>
        <div className={MainCSS.recipe_container}>
          <h1 style={{ color: "#ffff" }}>
            Suggested <span className={MainCSS.brand_heading}>Recipe</span>
          </h1>
          <ul className={MainCSS.latestCollection_list}>
            {searchedData.map((el) => (
              <RecipeElement
                recipeName={el.FoodName}
                id={el.FoodID}
                imgPath={el.imgPath}
                recipeDesc={el.Description}
                boxShadow={{
                  boxShadow: "-2px 2px 10px 0px rgba(255, 255, 255, 0.3)",
                }}
              />
            ))}
          </ul>
        </div>
      </section>
      <section className={MainCSS.category_section}>
        <div className={MainCSS.category_container}>
          <h1>
            Explore by <span className={MainCSS.brand_heading}>Category</span>
          </h1>
          <div className={MainCSS.align_container}>
            <h3 className={MainCSS.h3_heading}>Browse All &gt;&gt;</h3>
            <ul className={MainCSS.category_list}>
              {categoryMockData.map((el) => (
                <RecipeCategory
                  categoryName={el.categoryName}
                  // imgPath={el.imgPath}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

import { React, useEffect, useState } from "react";
import MainCSS from "./Main.module.css";
import RecipeElement from "../components/RecipeElement";
import RecipeCategory from "../components/RecipeCategory";
import MoonLoader from "react-spinners/ClipLoader";
const Main = ({ data, loading, error }) => {
  const [latest, setLatest] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (data) {
      const newData = [];
      setLatest(
        data.filter(
          (el) => el.FoodID >= data.length - 4 && el.FoodID < data.length
        )
      );

      for (let i = 0; i < 4; i++) {
        newData.push(data[Math.trunc(Math.random() * data.length) + 1]);
        setSuggested(newData);
      }

      const categoryName = [];
      const categoryArr = [];
      data.map((el) => {
        if (!categoryName.includes(el.category) && !el.category.includes("&")) {
          categoryName.push(el.category);
          categoryArr.push({
            categoryName: `${el.category}`,
            categoryImage: `${el.imgPath}`,
          });
        }

        setCategory(categoryArr);
      });
    }
  }, [data]);

  // useEffect(() => {
  //   if (data) {
  //     const newCategory = [];
  //       data.map((el) => {
  //       if (!newCategory.includes(el.category) && !el.category.includes("&")) {
  //         newCategory.push(el.category);
  //         setCategory((prevCategory) => [
  //           ...prevCategory,
  //           { categoryName: `${el.category}`, categoryImage: `${el.imgPath}` },
  //         ]);
  //       }
  //     });
  //   }
  // }, [data]);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  if (loading) {
    return (
      <div style={{ marginTop: "13rem" }}>
        <MoonLoader
          color={"#FF9400"}
          loading={loading}
          size={50}
          css={override}
        />
      </div>
    );
  }
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
            {latest &&
              latest.map((el) => (
                <RecipeElement
                  recipeName={el.FoodName}
                  id={el.FoodID}
                  imgPath={el.imgPath}
                  recipeDesc={el.Description}
                  key={el.FoodID}
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
            {suggested &&
              suggested.map((el) => (
                <RecipeElement
                  recipeName={el.FoodName}
                  id={el.FoodID}
                  imgPath={el.imgPath}
                  recipeDesc={el.Description}
                  boxShadow={{
                    boxShadow: "-2px 2px 10px 0px rgba(255, 255, 255, 0.3)",
                  }}
                  key={el.FoodID}
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
              {category &&
                category.map((el, i) => (
                  <RecipeCategory
                    id={i}
                    categoryName={el.categoryName}
                    img={el.categoryImage}
                    key={i}
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

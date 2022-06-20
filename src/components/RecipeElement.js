import { React, useState } from "react";
import currentRecipe from "./RecipeElement.module.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
const RecipeElement = ({ recipeName, id, imgPath, recipeDesc, boxShadow }) => {
  const [btnState, setbtnState] = useState(false);
  const navigate = useNavigate();
  // let url = useRouteMatch();
  const textTrunc = function (text, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (text.length <= num) {
      return text;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return text.slice(0, num) + "...";
  };

  const iconToggle = function () {
    setbtnState(!btnState);
  };

  return (
    <li
      key={Number(id)}
      className={currentRecipe.element_container}
      style={boxShadow}
    >
      <div className={currentRecipe.recipe__flexContainer}>
        <div
          className={currentRecipe.recipe__imageContainer}
          style={{
            backgroundImage: `url('${imgPath}') `,
          }}
        >
          <div className={currentRecipe.icon_container} onClick={iconToggle}>
            <BsHeart
              className={`${currentRecipe.heart_icon} ${
                btnState ? currentRecipe.icon_inactive : ""
              }`}
            />

            <BsHeartFill
              className={`${currentRecipe.heart_icon} ${
                btnState ? "" : currentRecipe.icon_inactive
              }`}
            />
          </div>
        </div>
        {/* <Link to={"/recipe/" + recipeName} /> */}
        <div className={currentRecipe.text_container}>
          <Link to={"/recipe/" + id} style={{ textDecoration: "none" }}>
            <div className={currentRecipe.recipe_name}>{recipeName}</div>
            <p className={currentRecipe.recipe__description}>
              {textTrunc(recipeDesc, 125)}
            </p>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default RecipeElement;
